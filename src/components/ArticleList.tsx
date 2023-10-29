import {
  Box,
  Card,
  CardBody,
  CardFooter,
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
import Image from "next/image";
import NextLink from "next/link";
import Article from "./Article";

interface ArticleListData {
  cardVariant: string;
}

export const ArticleList = ({ cardVariant = "elevated" }: ArticleListData) => {
  return (
    <Box>
      
        <Stack maxW='full' my={8}>
        <Heading variant="section" as="span">There is even room for a subtitle</Heading>
        <Heading size="lg" as="h2">This is the title of your list</Heading>
        </Stack>

      <Grid
        templateColumns={{ base: `repeat(2}, 1fr)`, md: `repeat(4, 1fr)`, lg: `repeat(4, 1fr)` }}
        gap={6}
        alignItems={"items-stretch"}
      >
        <Article cardVariant={cardVariant} />
        <Article cardVariant={cardVariant} />
        <Article cardVariant={cardVariant} />
        <Article cardVariant={cardVariant} />
      </Grid>
    </Box>
  );
};
