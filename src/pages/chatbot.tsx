import { Box, Button, Card, CardBody, CardFooter, CardHeader, CloseButton, Container, Flex, FormControl, Heading, Icon, IconButton, Input, Stack, Tooltip, Text, Wrap, Avatar } from "@chakra-ui/react";
import React from "react";
import PageLayout from "@/layout/PageLayout";
import { mdiCreation, mdiDeleteSweep } from "@mdi/js";

export default function Home() {
  return (
    <PageLayout>
      <Flex w="full" alignItems='center'>
        <Container>
          
          <Card variant={'elevated'} size={['sm', 'md', 'lg']} maxW={'lg'} background={'transparent'}>
      
              <CardHeader bgGradient="linear(to-tr, primary.500, teal.500)" color="chakra-inverse-text" borderTopRadius="2xl">
                <Stack direction="row" spacing={4} align="top" justify="space-between">
                  <Stack>
                    <Heading as="h2">Sitecore Assistant</Heading>
                    <Text variant="subtle" color="chakra-inverse-text">
                      Your friendly Sitecore helper!
                    </Text>
                  </Stack>
                  <CloseButton />
                </Stack>
              </CardHeader>
              <CardBody height={'200px'} maxHeight={['200px', '400px', '600px']} background={'chakra-body-bg'} overflowY={'auto'} p={3}>
                <Flex w="100%" h="80%" flexDirection="column" p="0">
                  <Flex w="100%" my={5}>
                    <Avatar name="Clippy" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/eb75f6e802994a59bc4091428c75d336" bg="white" />
                    <Flex bg="neutral-subtle-bg" color="chakra-body-text" minW="100px" maxW="350px" my="0" borderRadius={'md'} ml={2}>
                      <Text m={2}>Hello, this is your personal Sitecore assistant, how can I help you?</Text>
                    </Flex>
                  </Flex>
                        
                  <Flex w="100%" justify="flex-end">
                    <Flex bg="neutral-fg" color="chakra-inverse-text" minW="100px" maxW="350px" my="0" p="3" mx={5} borderRadius={'md'}>
                      <Text>Can you tell me a little bit more about Sitecore XM Cloud Plus</Text>
                    </Flex>
                  </Flex>

                  <Flex w="100%" my={5}>
                    <Avatar name="Clippy" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/eb75f6e802994a59bc4091428c75d336" bg="white" />
                    <Flex bg="neutral-subtle-bg" color="chakra-body-text" minW="100px" maxW="350px" my="0" borderRadius={'md'} ml={2} p={2}>
                      <Text>Sitecore XM Cloud Plus is a new offering from Sitecore, a global leader in end-to-end digital experience software. It is an extended digital-experience solution that brings together content management, AI-powered search, personalization, customer data management and analytics. It is designed to help brands speed up and simplify their move to the cloud by making it easier than ever before to embark on the journey to SaaS and leverage solutions with robust enterprise capabilities.</Text>
                    </Flex>
                  </Flex>
                        
                  <Flex w="100%" justify="flex-end">
                    <Flex bg="neutral-fg" color="chakra-inverse-text" minW="100px" maxW="350px" my="0" p="3" mx={5} borderRadius={'md'}>
                      <Text>Where can I find more information?</Text>
                    </Flex>
                  </Flex>

                  <Flex w="100%" my={5}>
                    <Avatar name="Clippy" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/eb75f6e802994a59bc4091428c75d336" bg="white" />
                    <Flex bg="neutral-subtle-bg" color="chakra-body-text" minW="100px" maxW="350px" my="0" borderRadius={'md'} ml={2} p={2}>
                      <Text>You can find more information about XM Cloud Plus on the Sitecore website or the Sitecore Developer Portal</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </CardBody>

              <CardFooter gap={4} background={'chakra-body-bg'} borderBottomRadius={'xl'}>
                <Tooltip label="Reset">
                  <IconButton variant="outline" icon={<Icon><path d={mdiDeleteSweep} /></Icon>} marginTop={'auto'} aria-label="Reset">
                    Reset
                  </IconButton>
                </Tooltip>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    
                  }}
                  style={{ width: '100%' }}
                >
                  <FormControl>
                    <Input variant="outline" type="text" placeholder="What would you like to know?" id="question" focusBorderColor="primary-subtle-bg" />
                  </FormControl>
                </form>
                <Wrap align="center">
                  <Button
                    
                    _hover={{}}
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    variant="ai"
                    leftIcon={<Icon><path d={mdiCreation} /></Icon>}
                    marginTop={'auto'}
                  >
                    Ask
                  </Button>
                </Wrap>
              </CardFooter>
            </Card>

          </Container>
      </Flex>
    </PageLayout>
  );
}
