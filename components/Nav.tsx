import {
  Box,
  Container,
  HStack,
  IconButton,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { SunIcon, MoonIcon } from '@heroicons/react/solid'
import { Fragment, useEffect, useState } from 'react'

export const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const textColor = useColorModeValue('gray.700', 'gray.100')
  return (
    <Box
      h={{ sm: '10', base: '20' }}
      w="full"
      color={useColorModeValue('gray.200', 'gray.700')}
      py={8}
    >
      <Container maxW={{ sm: 'container.xs', base: 'container.md' }} h={'full'}>
        <HStack justifyContent={'end'} h="full" alignItems={'center'}>
          <Text textColor={textColor} fontSize={{ base: 'md', md: 'lg' }}>
            Modiejun
          </Text>
          <Spacer />
          <Text
            textColor={useColorModeValue('gray.700', 'gray.100')}
            fontSize={{ base: 'md', md: 'lg' }}
          >
            {colorMode === 'light'
              ? 'Save your eyes from the strain'
              : 'Light up the experience'}
          </Text>
          <ArrowForwardIcon
            w={5}
            h={5}
            textColor={useColorModeValue('gray.700', 'gray.100')}
          />
          <IconButton
            aria-label="Toggle Light or dark mode"
            onClick={toggleColorMode}
            bgColor={useColorModeValue('gray.200', 'gray.600')}
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            textColor={useColorModeValue('gray.700', 'gray.100')}
          />
        </HStack>
      </Container>
    </Box>
  )
}

export const NavBar = () => {
  const [theme, setTheme] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (localStorage.theme !== undefined && localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setTheme('light')
    }
    return () => {}
  }, [theme])

  const toggleDarkMode = () => {
    const newTheme = 'light' === theme ? 'dark' : 'light'
    localStorage.theme = newTheme
    setTheme(newTheme)
  }

  return (
    <Fragment>
      <div className=" sticky top-0  h-16 w-full lg:absolute">
        <div className="hstack h-full justify-between px-4 md:container md:mx-auto lg:max-w-5xl lg:px-0">
          <div className="flex space-x-8">
            <a href="/home">Home</a>
            <a href="/experience">Experience</a>
            <a href="/projects">Projects</a>
            <a href="https://blog.modiejun.com" target="_blank">
              Blog
            </a>
          </div>
          <div className="hstack justify-end space-x-2">
            <p className="hidden md:inline-block">
              {theme !== 'light'
                ? 'Light up the Experince ->'
                : 'Save the eye strain'}
            </p>
            <button className="icon-button" onClick={toggleDarkMode}>
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
