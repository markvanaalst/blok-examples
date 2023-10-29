import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Image,
  Icon,
  CardHeader,
  Center,
  Grid,
  HStack,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  Show,
  Stack,
  Text,
} from "@chakra-ui/react";
import { mdiArrowRight } from "@mdi/js";
import NextLink from "next/link";

interface ArticleProps {
  cardVariant?: string;
}

const Article = ({ cardVariant = "elevated" }: ArticleProps) => {
  return (
    <LinkBox as="article" display={"inline-flex"}>
      <Card
        variant={cardVariant}
        layerStyle="interactive.raise"
        mx={"auto"}
        direction={{ base: "column", sm: "row", md: "column" }}
      >
        <CardHeader p={0}>
          <Center>
            <Image alt="" src="https://placehold.co/400x240" />
          </Center>
        </CardHeader>
        <CardBody padding={0}>
          <Stack direction={["column", "row", "column"]} spacing={5} padding={0}>
            <Box padding={5}>
              <Heading as="h3" size="sm" mb={2}>
                Title
              </Heading>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
              <Show below="lg">
                <HStack as={"span"} mt={2}>
                  <Link as={NextLink} href="#" fontWeight={"semibold"}>
                    Link
                  </Link>
                  <Icon>
                    <path d={mdiArrowRight} />
                  </Icon>
                </HStack>
              </Show>
            </Box>
          </Stack>
        </CardBody>
        <CardFooter display={{ base: "none", lg: "block" }}>
          <HStack as={"span"} mt={2}>
            <LinkOverlay as={NextLink} href={"#"} fontWeight={"semibold"}>
              Link
            </LinkOverlay>
            <Icon>
                <path d={mdiArrowRight} />
            </Icon>
          </HStack>
        </CardFooter>
      </Card>
    </LinkBox>
  );
};

export default Article;
