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
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
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
      <Flex flexGrow={1} as="main">
            {/* Sidebar  */}
          <Box as={'aside'} w="md">
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
            
                <Heading variant="section" justifyContent={'space-between'} display={"inline-flex"}>
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

          <Box layerStyle="section.main">
            
            <Heading size='md'>Dashboard</Heading>
            
            <SimpleGrid columns={[1, 1, 2, 3]} spacing="4" p="4">
              <Card variant='outlineRaised'>
                <CardHeader>
                  <Heading size='md'>Orders</Heading>
                </CardHeader>
                <CardBody>
                  <StatGroup>
                    <Stat>
                      <StatLabel>Today</StatLabel>
                      <StatNumber>474</StatNumber>
                      <StatHelpText>
                        <StatArrow type="increase" />
                        20%
                      </StatHelpText>
                    </Stat>
                    <Stat>
                      <StatLabel>Yesterday</StatLabel>
                      <StatNumber>381</StatNumber>
                      <StatHelpText>
                        <StatArrow type="decrease" />
                        20%
                      </StatHelpText>
                    </Stat>
                  </StatGroup>
                </CardBody>
              </Card>
              <Card variant='outlineRaised'>
                <CardHeader>
                <Heading size='md'>Visitors</Heading>
                </CardHeader>
                <CardBody>
                  <StatGroup>
                    <Stat>
                      <StatLabel>Today</StatLabel>
                      <StatNumber>32.012</StatNumber>
                      <StatHelpText>
                        <StatArrow type="increase" />
                        20%
                      </StatHelpText>
                    </Stat>
                    <Stat>
                      <StatLabel>Yesterday</StatLabel>
                      <StatNumber>20.241</StatNumber>
                      <StatHelpText>
                        <StatArrow type="decrease" />
                        20%
                      </StatHelpText>
                    </Stat>
                  </StatGroup>
                </CardBody>
            </Card>
            <Card variant='outlineRaised'>
                <CardHeader>
                <Heading size='md'>Customers (logged in)</Heading>
                </CardHeader>
                <CardBody>
                  <StatGroup>
                    <Stat>
                      <StatLabel>Today</StatLabel>
                      <StatNumber>9.012</StatNumber>
                      <StatHelpText>
                        <StatArrow type="increase" />
                        20%
                      </StatHelpText>
                    </Stat>
                    <Stat>
                      <StatLabel>Yesterday</StatLabel>
                      <StatNumber>7.241</StatNumber>
                      <StatHelpText>
                        <StatArrow type="decrease" />
                        20%
                      </StatHelpText>
                    </Stat>
                  </StatGroup>
                </CardBody>
            </Card>
            </SimpleGrid>
          
            

          </Box>
        
      </Flex>
    </PageLayout>
  );
}
