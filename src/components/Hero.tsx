import {
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  Stack,
  useColorModeValue,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { mdiGithub } from "@mdi/js";
import NextLink from "next/link";

const Hero = () => {
  return (
    <Flex w="full" alignItems="center">
      <Container py={16}>
        <Image mb="8" h="24" src="blok-logo.svg" alt="Sitecore Blok logo" />
        <Stack spacing="6" align="start">
          <Heading as="h1" size="xl">
            Build better products faster
          </Heading>
          <Text variant="subtle" maxW="prose">
            Blok is <NextLink href="https://www.sitecore.com">Sitecore’s</NextLink> product design system: the UI
            framework and style guide we use to build great apps. It’s publicly available, so that anyone can easily
            build software in the Sitecore design language.
          </Text>
          <HStack>
            <Button as={NextLink} href="https://blok.sitecore.com/get-started">
              Get started
            </Button>
            <Button
              as={NextLink}
              leftIcon={
                <Icon>
                  <path d={mdiGithub} />
                </Icon>
              }
              href="https://github.com/markvanaalst/blok-examples"
              variant={"outline"}
            >
              GitHub
            </Button>
          </HStack>
        </Stack>
      </Container>
    </Flex>
  );
};

export default Hero;
