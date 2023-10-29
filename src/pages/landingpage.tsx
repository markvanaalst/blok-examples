import Head from "next/head";
import {
  Image,
  Button,
  Container,
  Stack,
  Flex,
  Box,
  ContainerProps,
  ButtonGroup,
  Link,
  HStack,
  useColorMode,
  Badge,
  Text,
  Tooltip,
  IconButton,
  Icon,
  Heading,
  useColorModeValue,
  Card,
  CardBody,
  SimpleGrid,
  CardHeader,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Variants, motion } from "framer-motion";
import React from "react";
import { mdiArrowRight } from "@mdi/js";
import Hero from "@/components/Hero";
import PageLayout from "@/layout/PageLayout";
import { ArticleList } from "@/components/ArticleList";
import { ExampleCard } from "@/components/ExampleCard";

const variants: Variants = {
  hidden: {
    opacity: 0,
    x: 0,
    y: -40,
    transition: { duration: 0.4, type: "easeOut" },
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.4, type: "easeOut" },
  },
  exit: {
    opacity: 0,
    x: -0,
    y: 40,
    transition: { duration: 0.4, type: "easeOut" },
  },
};
const MotionContainer = motion<ContainerProps>(Container);

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <PageLayout>
      <Box h="full" w="full" bg="chakra-body-bg">
        <Hero />
        <Box
          layerStyle="section.main"
          width={"full"}
          bg="chakra-subtle-bg"
          // fontSize="lg"
          // h="full"
        >
          <Container maxW="container.xl" py={["8", "12", "16"]}>
            <ArticleList cardVariant={""} />
          </Container>
        </Box>

        <Box h="full" w="full" bg="chakra-subtle-bg">
          <Container maxW="container.xl" py={["8", "12", "16"]}>
            <Stack>
              <SimpleGrid gap="6" templateColumns="repeat(auto-fill, minmax(var(--sizes-md), 3fr))">
                <ExampleCard title="XM Cloud" description="Create, manage, and deliver relevant content everywhere, lightning-fast, with a world-leading, enterprise-ready CMS." />
                <ExampleCard title="Content Hub ONE" description="A powerful and intuitive headless CMS for the simplified creation and management of experiences across channels and devices." />
                <ExampleCard title="Sitecore Search" description="Predict search intent and display individualized results with a personalized search experience." />
                <ExampleCard title="Sitecore DAM" description="Centralize all your digital assets and deliver them to any customer touchpoint with an automated digital asset management (DAM) solution." />
                <ExampleCard title="Content Operations" description="Collaborate effortlessly on content strategy, creation, and analytics with an intelligent content operations solution." />
                <ExampleCard title="Sitecore Connect" description="Integrate seamlessly with third-party apps and connectors." />
                <ExampleCard title="Sitecore Send" description="Automate personalized email engagements that build trust and foster long-term relationships." />
                <ExampleCard title="Sitecore CDP" description="Optimize every experience across every channel with the leading experimentation aConnect and activate customer data across your ecosystem to drive relevance with an intelligent customer data platform.nd personalization platfo7rm." />
                <ExampleCard title="Sitecore Personalize" description="Optimize every experience across every channel with the leading experimentation and personalization platform." />
                <ExampleCard title="Sitecore Discover" description="Amplify customer conversions with hyper-relevant search results and AI-driven, automated merchandising." />
                <ExampleCard title="Sitecore Ordercloud" description="Scale your business, sell on any channel, and future-proof your commerce strategy with the next-generation headless commerce platform." />
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>
      </Box>
    </PageLayout>
  );
}
