import { extendTheme, type ThemeConfig, theme as base } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  fonts: {
    heading: `Roboto ,'IBM Plex Sans', sans-serif,${base.fonts?.heading}`,
    body: `Roboto,'IBM Plex Sans', sans-serif,${base.fonts?.heading}`,
  },
})
export default theme
