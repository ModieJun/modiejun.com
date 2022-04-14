import {
  Box,
  Container,
  Heading,
  useColorModeValue,
  Image,
  VStack,
  Text,
  Divider,
  List,
  ListItem,
  HStack,
  ColorModeScript,
  Link,
  Grid,
  GridItem,
  Button,
  LinkOverlay,
  LinkBox,
} from '@chakra-ui/react'
import Head from 'next/head'
import { Nav } from '../components/Nav'
import theme from '../theme/theme'
import { Data, getJsonFromFile } from '../utils/read_json'
import ContentSection from '../components/Section'
import { FadeInView, FadeInY } from '../components/animated/FadeInView'
import { DownloadIcon, EditIcon, EmailIcon } from '@chakra-ui/icons'
import { RESUME_URL } from '../utils/resources'
import { useViewportScroll } from 'framer-motion'
import ProgressBar from '../components/ProgressBar'

type HomePageProps = {
  data: Data[]
}

const DownloadResume = () => {
  var anchor = document.createElement('a')
  anchor.href = RESUME_URL
  anchor.target = '_blank'
  anchor.download = 'JUNJIE_RESUME'
  anchor.click()
}

const Home = ({ data }: HomePageProps) => {
  const textColor = useColorModeValue('gray.700', 'gray.100')
  const { scrollYProgress } = useViewportScroll()

  return (
    <Box
      // h={"100vh"}
      maxH="auto"
      w="full"
      bgColor={useColorModeValue('gray.100', 'gray.800')}
    >
      <Head>
        <title>ModieJun</title>
        <meta lang="en" />
      </Head>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {/* Nav */}
      <Box pos="sticky" top={0} left={0} w="full">
        <ProgressBar scrollYProgress={scrollYProgress} />
      </Box>
      <Nav />

      {/* Content */}
      <Container maxW={{ sm: 'container.xs', base: 'container.lg' }} pb="20">
        <VStack spacing={4}>
          {/* Chakra loads from the public directory for the images */}
          <Image
            mt={{ base: '5', md: '8' }}
            src="/profile.jpg"
            alt="Profile Image"
            boxSize={{ base: '125px', md: '175px' }}
            borderRadius="full"
            boxShadow={'dark-lg'}
          />
          <Heading textColor={textColor} letterSpacing={4}>
            JUNJIE LIN
          </Heading>
          <Text letterSpacing={4}>🇭🇰 🇿🇦 🇨🇳</Text>
          <Text textColor={textColor} letterSpacing={4}>
            Developer | Tech..no Funk | bruh
          </Text>
          {/* Description */}
          <Container maxW={{ sm: 'container.sm', base: 'container.md' }}>
            <Text letterSpacing={1} textAlign="justify">
              Hi! Hi! I go by Johnson! Im a African-born Chinese curious about
              Tech 📺,, Cloud ☁️ and DevOps 🛠 . Im currently work in the Tech
              Industry as a <Text as="i">Tech Consultant @IBM </Text>👨🏻‍💻
            </Text>
            {/* Buttons for funny things */}
            <Text mt={4} fontStyle="italic">
              Get In touch with me or check out my other stuff
            </Text>
            <HStack w="full" justifyContent="space-around" py={4}>
              <Button
                leftIcon={<DownloadIcon />}
                fontWeight="light"
                onClick={DownloadResume}
              >
                Resume
              </Button>
              <Button leftIcon={<EditIcon />} fontWeight="light">
                <LinkOverlay href="https://blog.modiejun.com" isExternal={true}>
                  My Blog
                </LinkOverlay>
              </Button>
              <Button leftIcon={<EmailIcon />} fontWeight="light">
                <LinkOverlay
                  href="mailto:junjielin@modiejun.com"
                  isExternal={true}
                >
                  Mail Me
                </LinkOverlay>
              </Button>
            </HStack>
          </Container>
        </VStack>

        {/* Accolades */}
        <Divider my={12} />
        <VStack w={'full'} alignItems="start" spacing={8}>
          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2,1fr)' }}
            gap={{ base: 16, md: 2 }}
            w="full"
            h="auto"
          >
            {data.map((ele, index) => {
              return (
                <GridItem
                  key={ele.title}
                  colSpan={1}
                  rowStart={{ md: index + 1 }}
                  colStart={{ md: (index + 1) % 2 == 0 ? 2 : 1 }}
                >
                  <FadeInY duration={0.7}>
                    <ContentSection
                      key={ele.title}
                      title={ele.title}
                      items={ele.content}
                    />
                  </FadeInY>
                </GridItem>
              )
            })}
            {/* Images */}
            <GridItem
              colSpan={1}
              rowStart={{ base: 1, md: 1 }}
              colStart={{ md: 2 }}
            >
              <HStack w="full" h="full" justifyContent={'center'}>
                <FadeInY duration={0.8}>
                  <Box
                    rounded="lg"
                    overflow={'hidden'}
                    h={{ base: '250px' }}
                    w={{ base: '300px' }}
                  >
                    <Image
                      src="/HK.jpg"
                      alt="Hong Kong"
                      objectFit={'cover'}
                      w="full"
                      h="full"
                    />
                  </Box>
                </FadeInY>
              </HStack>
            </GridItem>

            <GridItem
              colSpan={1}
              rowStart={{ base: 3, md: 2 }}
              colStart={{ md: 1 }}
            >
              <HStack w="full" h="full" justifyContent={'center'}>
                <FadeInY duration={0.9}>
                  <Box
                    rounded="lg"
                    overflow={'hidden'}
                    h={{ base: '350px' }}
                    w={{ base: '300px' }}
                  >
                    <Image
                      src="/graduation.jpeg"
                      alt="Graduation Photo"
                      objectFit={'cover'}
                      w="full"
                      h="full"
                    />
                  </Box>
                </FadeInY>
              </HStack>
            </GridItem>
          </Grid>

          <FadeInY>
            <Heading as={'h1'}>Down &amp; Dirty 💻 </Heading>
            <VStack spacing={4} py={4}>
              <Text textAlign="justify">
                I&apos;ve worked with multiple technologies in the development
                space, mainly on Full Stack Applications. Touching{' '}
                <Text fontStyle={'italic'} display="inline" as="u">
                  ReactJS &amp; VueJS
                </Text>{' '}
                for the front end and{' '}
                <Text fontStyle={'italic'} display="inline" as="u">
                  Springboot &amp; NestJS
                </Text>{' '}
                for backend.
              </Text>
              <Text textAlign={'justify'}>
                Other than development I enjoy automatoin and optimizing things.
                Ive worked on CI/CD pipelines implementations using GitLab as
                well as application Containerisation with{' '}
                <Link href="www.docker.com" as={'u'} fontStyle="italic">
                  Docker
                </Link>
                . Other honorable mentions would be Automated ETL Pipeline
                developments for data processing using{' '}
                <Link
                  href="https://airflow.apache.org/"
                  fontStyle={'italic'}
                  as="u"
                >
                  Apache Airflow
                </Link>
                . Though I have just started my career in the Technology space.
                I look forward to growing and becoming a reliable individual who
                can come up with solutoins for a problem
              </Text>
            </VStack>
          </FadeInY>

          <Heading as={'h3'} size="md">
            Certs that i have 📜
          </Heading>
          <HStack justifyContent={'space-around'} w="full" py={8}>
            <FadeInView>
              <LinkBox>
                <Image
                  src="aws-certified-cloud-practitioner.png"
                  alt="Badge"
                  w="100px"
                />
                <LinkOverlay href="https://www.credly.com/badges/f1f3d552-604d-4cec-be94-6be417e2f36e/public_url"></LinkOverlay>
              </LinkBox>
            </FadeInView>
            <FadeInView>
              <LinkBox>
                <Image
                  src="alteryx-designer-core-certification.png"
                  alt="Badge"
                  w="100px"
                />
                <LinkOverlay href="https://www.credly.com/badges/df2015fc-42c5-49de-b9ac-d27ae9d1bed3/public_url"></LinkOverlay>
              </LinkBox>
            </FadeInView>
          </HStack>
        </VStack>

        {/* Footer */}
        <Box py="8">
          <HStack justifyContent={'space-between'}>
            <VStack alignItems={'start'}>
              <Link href="https://blog.modiejun.com/about">Contact me</Link>
              <Link href="https://blog.modiejun.com">Blog</Link>
            </VStack>
            <VStack>
              <List>
                <ListItem>
                  <HStack>
                    {/* <ListIcon as=""></ListIcon> */}
                    <Link>Instagram</Link>
                  </HStack>
                </ListItem>
                <ListItem>
                  <HStack>
                    {/* <ListIcon as=""></ListIcon> */}
                    <Link href="https://www.linkedin.com/in/junjie-lin-modiejun/">
                      LinkedIn
                    </Link>
                  </HStack>
                </ListItem>
              </List>
            </VStack>
          </HStack>
        </Box>
        <Text my="" fontStyle="italic" fontWeight="light">
          All Rights Reserved @ JUNJIE LIN 2022
        </Text>
      </Container>
    </Box>
  )
}

export const getStaticProps = () => {
  const data = getJsonFromFile()
  return {
    props: {
      data: data,
    },
  }
}

export default Home
