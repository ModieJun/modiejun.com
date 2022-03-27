import { extendTheme, type ThemeConfig, theme as base } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'IBM Plex Sans', sans-serif,${base.fonts?.heading}`,
    body: `'IBM Plex Sans', sans-serif,${base.fonts?.heading}`,
  },
});
export default theme;
