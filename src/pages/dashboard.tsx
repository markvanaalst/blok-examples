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
  Center,
  Wrap,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Variants, motion } from "framer-motion";
import React from "react";
import { mdiAccountMultipleOutline, mdiArchiveOutline, mdiChartBoxOutline, mdiLayersOutline, mdiArrowRight, mdiCogOutline, mdiFileOutline, mdiHomeVariantOutline, mdiCartOutline, mdiAccountMultiple, mdiPoll, mdiPlusCircleOutline } from "@mdi/js";
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
        
      <Box as={'aside'} minH="100vh" w="xs">
            <Wrap
                layerStyle="section.sidebar"
                direction="column"
                maxH={`calc(100vh - 3.5rem)`}
                h={`calc(100vh - 3.5rem)`}
                top="14"
                overflow="auto"
                position={'sticky'}
                display="flex"
                flexFlow="column nowrap"
            >
                <ButtonGroup variant="navigation" size="md" orientation="vertical" spacing="1" mx="-2" mb="4">
                  <Button as='a' href='#' leftIcon={<Icon><path d={mdiHomeVariantOutline} /></Icon>} >Dashboard</Button>
                  <Button as='a' href='#' leftIcon={<Icon><path d={mdiFileOutline} /></Icon>}>Orders</Button>
                  <Button as='a' href='#' leftIcon={<Icon><path d={mdiCartOutline} /></Icon>} >Products</Button>
                  <Button as='a' href='#' leftIcon={<Icon><path d={mdiAccountMultiple} /></Icon>} >Customers</Button>
                  <Button as='a' href='#' leftIcon={<Icon><path d={mdiPoll} /></Icon>} >Reports</Button>
                  <Button as='a' href='#' leftIcon={<Icon><path d={mdiLayersOutline} /></Icon>} >Integrations</Button>
                </ButtonGroup>
            
                <Heading variant="section" justifyContent={'space-between'} display={'block'}>
                  Saved reports
                  <IconButton
                    icon={<Icon><path d={mdiPlusCircleOutline} /></Icon>}
                    size="xs"
                    variant={'ghost'}
                    aria-label={""}
                  />
                </Heading>
                <ButtonGroup variant="navigation" size="md" orientation="vertical" spacing="1" mx="-2" mb="4">
                  <Button as='a' href='#' leftIcon={<Icon><path d={mdiChartBoxOutline} /></Icon>} >Current month</Button>
                  <Button as='a' href='#' leftIcon={<Icon><path d={mdiChartBoxOutline} /></Icon>}>Current quarter</Button>
                  <Button as='a' href='#' leftIcon={<Icon><path d={mdiChartBoxOutline} /></Icon>} >Last Month</Button>
                  <Button as='a' href='#' leftIcon={<Icon><path d={mdiChartBoxOutline} /></Icon>} >Last quarter</Button>
                </ButtonGroup>
              </Wrap>
          </Box>


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
