import {
  Image,
  Button,
  Stack,
  Flex,
  Box,
  ButtonGroup,
  Link,
  HStack,
  useColorMode,
  Badge,
  Tooltip,
  IconButton,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { mdiCircleHalfFull } from '@mdi/js'
const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    
    return (
<Box layerStyle="section.topbar" shadow={"base"} zIndex={"sticky"} position="sticky" top="0">
          <Flex h="14" align={"center"} justify="space-between">
            <HStack flexShrink={0}>
              <Link href="/">
                <Image
                  p="1"
                  h="8"
                  w={[8, 8, "auto"]}
                  fit="cover"
                  align="left"
                  alt="Sitecore Blok logo"
                  src={useColorModeValue("https://sitecorecontenthub.stylelabs.cloud/api/public/content/37768281ce944bafb141bc1d4741fae1",
                  "https://sitecorecontenthub.stylelabs.cloud/api/public/content/507bd1b6eaa04385b07cfe44a424e053")}
                />
              </Link>
              <Badge colorScheme="primary" variant="outline">
                Examples
              </Badge>
            </HStack>
            <Stack direction={"row"} w="full" alignItems={"center"} px={4}>
              <Button size="sm" as={Link} variant="navigation" isActive={false} href="/landingpage">
                Landingpage
              </Button>
              <Button size="sm" as={Link} variant="navigation" isActive={false} href="/dashboard">
                Dashboard
              </Button>
              <Button size="sm" as={Link} variant="navigation" isActive={false} href="/chatbot">
                Chatbot
              </Button>
            </Stack>
            <ButtonGroup size="sm" variant="ghost">
            <Tooltip
                label={
                    colorMode === 'light'
                        ? 'Dark mode'
                        : 'Light mode'
                }
            >
                <IconButton
                    onClick={toggleColorMode}
                    icon={
                        <Icon>
                            <path d={mdiCircleHalfFull} />
                        </Icon>
                    }
                    aria-label={
                        colorMode === 'light'
                            ? 'Dark mode'
                            : 'Light mode'
                    }
                />
            </Tooltip>
            </ButtonGroup>
          </Flex>
        </Box>
    )
}
    
export default NavBar