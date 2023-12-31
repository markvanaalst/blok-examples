import {
  Container,
  Stack,
  Box,
  useColorMode,
  Text,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import Hero from "@/components/Hero";
import PageLayout from "@/layout/PageLayout";
import { ArticleList } from "@/components/ArticleList";
import { ExampleCard } from "@/components/ExampleCard";


export default function Home() {
  return (
    <PageLayout>
      <Box h="full" w="full" bg="chakra-body-bg">
        <Hero />
        <Box
          layerStyle="section.main"
          width={"full"}
          bg="chakra-subtle-bg"
        >
          <Container maxW="container.xl" py={["8", "12", "16"]}>
            <ArticleList cardVariant={""} />
          </Container>
        </Box>

        <Box h="full" w="full" bg="chakra-bg">
          <Container maxW="container.xl" py={["8", "12", "16"]}>
            <Stack textAlign={'center'} px={60} py={10} lineHeight={10}>
              <Heading>Explore our SaaS DXP</Heading>
              <Text>Sitecore&rsquo;s SaaS-enabled, composable digital experience platform (DXP) allows you to choose which products you want to implement from search to purchase to post-sale marketing with solutions for Content, Experience, and Commerce.</Text>
            </Stack>
            <Stack>
              <SimpleGrid gap="6" columns={3}>
                <ExampleCard title="Content Cloud" description="World leading cloud-based solutions to manage your content from strategy to delivery" />
                <ExampleCard title="Engagement Cloud" description="Unlock customer data to make every interaction smarter." />
                <ExampleCard title="Commerce Cloud" description="Acquire and engage shoppers with omnichannel buying experiences that connect across touchpoints and moments." />
              </SimpleGrid>
            </Stack>
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
