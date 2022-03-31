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
  Progress,
  LinkOverlay,
} from "@chakra-ui/react";
import Head from "next/head";
import { Nav } from "../components/Nav";
import theme from "../theme/theme";
import { Data, getJsonFromFile } from "../utils/read_json";
import ContentSection from "../components/Section";
import { FadeInView, FadeInY } from "../components/animated/FadeInView";
import { DownloadIcon, EditIcon } from "@chakra-ui/icons";
import { RESUME_URL } from "../utils/resources";
import { motion, useViewportScroll } from "framer-motion";
import ProgressBar from "../components/ProgressBar";

type HomePageProps = {
  data: Data[];
};

const DownloadResume = () => {
  var anchor = document.createElement("a");
  anchor.href = RESUME_URL;
  anchor.target = "_blank";
  anchor.download = "JUNJIE_RESUME";
  anchor.click();
};

const Home = ({ data }: HomePageProps) => {
  const textColor = useColorModeValue("gray.700", "gray.100");
  const { scrollYProgress } = useViewportScroll();

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
      <Box pos="sticky" top={0} left={0} w="full">
        <ProgressBar scrollYProgress={scrollYProgress} />
      </Box>
      <Nav />

      {/* Content */}
      <Container maxW={{ sm: "container.xs", base: "container.lg" }} pb="20">
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
          <Container maxW={{ sm: "container.sm", base: "container.md" }}>
            <Text letterSpacing={1} textAlign="justify">
              Hi! Hi! I go by Johnson! Im a African-born Chinese curious about
              Tech 📺,, Cloud ☁️ and DevOps 🛠 . Im currently work in the Tech
              Industry as a <Text as="i">Tech Consultant @IBM </Text>👨🏻‍💻
            </Text>
            {/* Buttons for funny things */}
            <Text mt={4} fontStyle="italic">
              My stuff that you might be interested in:
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
            </HStack>
          </Container>
        </VStack>

        {/* Accolades */}
        <Divider my={12} />
        <VStack w={"full"} alignItems="start" spacing={8}>
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2,1fr)" }}
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
              );
            })}
            {/* Images */}
            <GridItem colSpan={1} rowStart={2} colStart={1}>
              <HStack w="full" h="full" justifyContent={"center"}>
                <FadeInY duration={0.9}>
                  <Box
                    rounded="lg"
                    overflow={"hidden"}
                    h={{ base: "350px", md: "350px" }}
                    w={{ base: "300px", md: "300px" }}
                  >
                    <Image
                      src="/graduation.jpeg"
                      alt="Graduation Photo"
                      objectFit={"cover"}
                      w="full"
                      h="full"
                    />
                  </Box>
                </FadeInY>
              </HStack>
            </GridItem>
          </Grid>

          <Heading as={"h1"}>Tech Stack</Heading>
          <HStack justifyContent={"space-between"} w="full">
            <FadeInView>
              <Image
                src="/python.png"
                boxSize={"auto"}
                alt="python image"
                w="100px"
                rounded={"lg"}
              ></Image>
            </FadeInView>
            <FadeInView duration={0.7}>
              <Image
                src="/docker.webp"
                boxSize={"auto"}
                alt="Docker image"
                w="100px"
                fit={"cover"}
                rounded={"lg"}
              ></Image>
            </FadeInView>
            <FadeInView duration={0.8}>
              <Image
                src="/nestjs.svg"
                boxSize={"auto"}
                w="100px"
                alt="Nestjs image"
                fit={"cover"}
                rounded={"lg"}
              ></Image>
            </FadeInView>
          </HStack>
        </VStack>

        {/* Footer */}
        <Box py="5">
          <HStack justifyContent={"space-between"}>
            <VStack alignItems={"start"}>
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
          @All Rights Reserved JUNJIE LIN 2022
        </Text>
      </Container>
    </Box>
  );
};

export const getStaticProps = () => {
  const data = getJsonFromFile();
  return {
    props: {
      data: data,
    },
  };
};

export default Home;
