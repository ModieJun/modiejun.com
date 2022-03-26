FROM node:16-alpine  as base 

WORKDIR /app

RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Builder 
FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY . .

RUN yarn build

#Production building
FROM  node:16-alpine as PRD
WORKDIR /app

ENV NODE_ENV production

#Add user group for the image
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

#Running and cofig
USER nextjs

EXPOSE 3000
ENV PORT 3000

CMD [ "node","server.js" ]
