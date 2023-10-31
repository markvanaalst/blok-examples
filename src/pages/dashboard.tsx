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
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  CloseButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Variants, motion } from "framer-motion";
import React from "react";
import { mdiAccountMultipleOutline, mdiArchiveOutline, mdiChartBoxOutline, mdiLayersOutline, mdiCogOutline, mdiFileOutline, mdiHomeVariantOutline, mdiCartOutline, mdiAccountMultiple, mdiPoll, mdiPlusCircleOutline, mdiDotsHorizontal, mdiPencilOutline, mdiChevronDown, mdiMagnify, mdiPlus } from "@mdi/js";
import Hero from "@/components/Hero";
import PageLayout from "@/layout/PageLayout";
import { ArticleList } from "@/components/ArticleList";
import { ExampleCard } from "@/components/ExampleCard";


export default function Home() {
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

          <Flex layerStyle="section.main" gap={4} direction={'column'}>
            
            <Heading size='md'>Dashboard</Heading>
            
            <SimpleGrid columns={[1, 1, 2, 3]} spacing="4">
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
          
            <Heading size='md'>More information</Heading>
            <Stack>
            <Wrap align="center">
                <InputGroup maxW="2xs">
                    <InputLeftElement pointerEvents="none">
                      <Icon>
                          <path d={mdiMagnify} />
                      </Icon>
                    </InputLeftElement>
                    <Input placeholder="Search" value="some text here" />
                    <InputRightElement>
                        <Tooltip label="Clear">
                            <CloseButton />
                        </Tooltip>
                    </InputRightElement>
                </InputGroup>
                <ButtonGroup as={Wrap} variant="filter">
                    <Button isActive rightIcon={<CloseButton mr="-2" />}>
                        Project:
                        <Text ml="1" fontWeight="normal">
                            Blok, Content Hub ONE, Explorer, +2
                        </Text>
                    </Button>
                    <Button isActive rightIcon={<CloseButton mr="-2" />}>
                        Type:
                        <Text ml="1" fontWeight="normal">
                            Task
                        </Text>
                    </Button>
                    <Button
                        rightIcon={
                            <Icon layerStyle="menuButtonIcon">
                                <path d={mdiChevronDown} />
                            </Icon>
                        }
                    >
                        Status
                    </Button>
                    <Button isActive rightIcon={<CloseButton mr="-2" />}>
                        Assigned to me
                    </Button>
                    <Button
                        rightIcon={
                            <Icon>
                                <path d={mdiPlus} />
                            </Icon>
                        }
                    >
                        More
                    </Button>
                    <Button variant="link" colorScheme="primary" px="2">
                        Clear all
                    </Button>
                </ButtonGroup>
            </Wrap>



            <TableContainer as={Card} variant="flat" size="lg" whiteSpace="normal">
        <Table>
          <Thead>
            <Tr>
              <Th>Column one</Th>
              <Th>Column three</Th>
              <Th>Status</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Value</Td>
              <Td>Value</Td>
              <Td>
                <Badge>New</Badge>
              </Td>
              <Td isNumeric>
                <ButtonGroup variant="ghost" size="sm">
                  <Tooltip label="Edit">
                    <IconButton
                      icon={<Icon><path d={mdiPencilOutline} /></Icon>}
                      aria-label={"Edit"}
                    />
                  </Tooltip>
                  <Tooltip label="More options">
                    <IconButton
                      icon={<Icon><path d={mdiDotsHorizontal} /></Icon>}
                      aria-label={"More options"}
                    />
                  </Tooltip>
                </ButtonGroup>
              </Td>
            </Tr>
            <Tr>
              <Td>Value</Td>
              <Td>Value</Td>
              <Td>
                <Badge colorScheme="success">Done</Badge>
              </Td>
              <Td isNumeric>
                <ButtonGroup variant="ghost" size="sm">
                  <Tooltip label="Edit">
                    <IconButton
                      icon={<Icon><path d={mdiPencilOutline} /></Icon>}
                      aria-label={"Edit"}
                    />
                  </Tooltip>
                  <Tooltip label="More options">
                    <IconButton
                      icon={<Icon><path d={mdiDotsHorizontal} /></Icon>}
                      aria-label={"More options"}
                    />
                  </Tooltip>
                </ButtonGroup>
              </Td>
            </Tr>
            <Tr>
              <Td>Value</Td>
              <Td>Value</Td>
              <Td>
                <Badge colorScheme="danger">Failed</Badge>
              </Td>
              <Td isNumeric>
                <ButtonGroup variant="ghost" size="sm">
                  <Tooltip label="Edit">
                    <IconButton
                      icon={<Icon><path d={mdiPencilOutline} /></Icon>}
                      aria-label={"Edit"}
                    />
                  </Tooltip>
                  <Tooltip label="More options">
                    <IconButton
                      icon={<Icon><path d={mdiDotsHorizontal} /></Icon>}
                      aria-label={"More options"}
                    />
                  </Tooltip>
                </ButtonGroup>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      </Stack>

          </Flex>
        
      </Flex>
    </PageLayout>
  );
}
