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
  ListIcon,
  HStack,
  ColorModeScript,
} from "@chakra-ui/react";
import { UnlockIcon } from "@chakra-ui/icons";
import type { NextPage } from "next";
import Head from "next/head";
import { Nav } from "../components/Nav";
import nextjs from "../public/nextjs.svg";
import theme from "../theme";

const Home: NextPage = () => {
  const textColor = useColorModeValue("gray.700", "gray.100");
  return (
    <Box
      // h={"100vh"}
      maxH="auto"
      w="full"
      bgColor={useColorModeValue("gray.100", "gray.700")}
    >
      <Head>
        <title>ModieJun</title>
        <meta lang="en" />
      </Head>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {/* Nav */}
      <Nav />

      {/* Content */}
      <Container maxW={{ sm: "container.xs", base: "container.md" }}>
        <VStack spacing={4}>
          {/* Chakra loads from the public directory for the images */}
          <Image
            mt={{ base: "5", md: "8" }}
            src="/profile.jpg"
            alt="Profile Image"
            boxSize={{ base: "125px", md: "175px" }}
            borderRadius="full"
            boxShadow={"dark-lg"}
          />
          <Heading textColor={textColor} letterSpacing={4}>
            Junjie LIN
          </Heading>
          <Text letterSpacing={4}>🇭🇰 🇿🇦 🇨🇳</Text>
          <Text textColor={textColor} letterSpacing={4}>
            Developer | Tech..no Funk | bruh
          </Text>
          {/* Description */}
          <Text letterSpacing={1} textAlign="justify">
            Hi! Hi! I go by Johnson! Im a African-born chinese curios about Tech
            Gadgets 📺, Cloud ☁️ and DevOps. Im currently work in the Tech
            Industry as a <Text as="i">Tech Consultant @IBM </Text>👨🏻‍💻
          </Text>
          {/* Accolades */}
          <Divider />
          <VStack w={"full"} alignItems="start" spacing={2}>
            <Heading as={"h1"}>Experiences</Heading>
            <Box w={"full"}>
              <Text>Application Consultant - Data Team </Text>
              <List spacing={2}>
                <ListItem>
                  <ListIcon as={UnlockIcon} color={textColor} />
                </ListItem>
                <ListItem>
                  <ListIcon as={UnlockIcon} color={textColor} />
                </ListItem>
                <ListItem>
                  <ListIcon as={UnlockIcon} color={textColor} />
                </ListItem>
              </List>
            </Box>
            <Divider />
            <Heading as={"h1"}>Education</Heading>
            <Box w={"full"}>
              <Text>Application Consultant - Data Team </Text>
              <List spacing={2}>
                <ListItem>
                  <ListIcon as={UnlockIcon} color={textColor} />
                </ListItem>
                <ListItem>
                  <ListIcon as={UnlockIcon} color={textColor} />
                </ListItem>
                <ListItem>
                  <ListIcon as={UnlockIcon} color={textColor} />
                </ListItem>
              </List>
            </Box>
            <Divider />
            <Heading as={"h1"}>Tech Stack</Heading>
            <HStack justifyContent={"space-between"} w="full" pt={8}>
              <Image
                src="/python.png"
                boxSize={"auto"}
                alt="python image"
                w="100px"
                rounded={"lg"}
              ></Image>
              <Image
                src="/docker.webp"
                boxSize={"auto"}
                alt="Docker image"
                w="100px"
                fit={"cover"}
                rounded={"lg"}
              ></Image>
              <Image
                src="/nestjs.svg"
                boxSize={"auto"}
                w="100px"
                alt="Nestjs image"
                fit={"cover"}
                rounded={"lg"}
              ></Image>
            </HStack>
          </VStack>

          {/* Footer */}
          <Box h={20}></Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Home;
