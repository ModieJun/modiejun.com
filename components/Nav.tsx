import {
  Box,
  Container,
  HStack,
  Icon,
  IconButton,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { ArrowForwardIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

export const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      h={{ sm: "10", base: "20" }}
      w="full"
      color={useColorModeValue("gray.200", "gray.700")}
      py={8}
    >
      <Container maxW={{ sm: "container.xs", base: "container.md" }} h={"full"}>
        <HStack justifyContent={"end"} h="full" alignItems={"center"}>
          <Text
            textColor={useColorModeValue("gray.700", "gray.100")}
            fontSize={{ base: "md", md: "lg" }}
          >
            {colorMode === "light"
              ? "Save your eyes from the strain"
              : "Light up the experience"}
          </Text>
          <ArrowForwardIcon
            w={5}
            h={5}
            textColor={useColorModeValue("gray.700", "gray.100")}
          />
          <IconButton
            aria-label="Toggle Light or dark mode"
            onClick={toggleColorMode}
            bgColor={useColorModeValue("gray.200", "gray.600")}
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            textColor={useColorModeValue("gray.700", "gray.100")}
          />
        </HStack>
      </Container>
    </Box>
  );
};
