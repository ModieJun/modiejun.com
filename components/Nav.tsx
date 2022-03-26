import {
  Box,
  Container,
  HStack,
  Icon,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export const Nav = () => {
  const { toggleColorMode } = useColorMode();
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
            Save your eyes from the strain
          </Text>
          <ArrowForwardIcon
            w={5}
            h={5}
            textColor={useColorModeValue("gray.700", "gray.100")}
          />
          <Switch onChange={toggleColorMode} size={"lg"} />
        </HStack>
      </Container>
    </Box>
  );
};
