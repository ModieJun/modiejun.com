import { UnlockIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  HStack,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { ReactChildren } from "react";
import { Content } from "../utils/read_json";

type ContentSectionProps = {
  title: string;
  items: Content[];
  children?: ReactChildren;
};

const ContentSection = ({ title, items }: ContentSectionProps) => {
  const textColor = useColorModeValue("gray.700", "gray.100");
  return (
    <VStack w={"full"} alignItems="start" spacing={4}>
      <Heading fontSize={"2xl"}>{title.toUpperCase()}</Heading>
      {items.map((ele) => {
        return (
          <Box w="full" key={ele.heading + ele.subheading}>
            <Stack
              justifyContent={"space-between"}
              direction={["column", "row"]}
            >
              <Text fontStyle="italic" fontWeight={"semibold"}>
                {ele.heading}
              </Text>
              <Spacer />
              <Text fontStyle="italic">{ele.subheading}</Text>
            </Stack>
            <Text
              fontWeight="light"
              textColor={textColor}
              fontSize={"sm"}
              fontStyle="oblique"
            >
              {ele.date}
            </Text>
            <List spacing={4} my="4">
              {ele.info.map((info) => {
                return (
                  <ListItem key={info} fontSize={"sm"}>
                    <Flex>
                      <Box>
                        <ListIcon as={UnlockIcon} color={textColor} />
                      </Box>
                      <Text textAlign={"justify"}>{info}</Text>
                    </Flex>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        );
      })}
      {/* Boxes  */}
    </VStack>
  );
};

export default ContentSection;
