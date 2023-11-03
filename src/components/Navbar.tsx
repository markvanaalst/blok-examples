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
  useDisclosure,
  MenuButton,
  Menu,
  MenuItem,
  MenuList,
  BoxProps,
} from "@chakra-ui/react";
import React from "react";
import { mdiChevronDown, mdiChevronUp, mdiCircleHalfFull } from "@mdi/js";

type NavigationProps = BoxProps & {
  title?: string;
  navigationData: Navigation;
}

export type Navigation = {
  title: string;
  logo: {
    light: string;
    dark: string;
  };
  badge: string;
  menuItems: NavigationItem[];
};

export type NavigationItem = {
  title: string;
  path: string;
  children?: NavigationItem[];
};

const NavBar = ({ navigationData, ...rest }: NavigationProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box layerStyle="section.topbar" shadow={"base"} {...rest}>
      <Flex h="14" align={"center"} justify="space-between">
        <HStack flexShrink={0}>
          <Link href="/">
            <Image
              p="1"
              h="8"
              w={[8, 8, "auto"]}
              fit="cover"
              align="left"
              alt={navigationData.title}
              src={useColorModeValue(`${navigationData.logo.light}`, `${navigationData.logo.dark}`)}
            />
          </Link>
          <Badge colorScheme="primary" variant="outline">
            {navigationData.badge}
          </Badge>
        </HStack>
        <Stack direction={"row"} w="full" alignItems={"center"} px={4}>
          {navigationData?.menuItems.map((menuItem, i) => (
            <NavLink menuItem={menuItem} key={i} />
          ))}
          ;
        </Stack>
        <ButtonGroup size="sm" variant="ghost">
          <Tooltip label={colorMode === "light" ? "Dark mode" : "Light mode"}>
            <IconButton
              onClick={toggleColorMode}
              icon={
                <Icon>
                  <path d={mdiCircleHalfFull} />
                </Icon>
              }
              aria-label={colorMode === "light" ? "Dark mode" : "Light mode"}
            />
          </Tooltip>
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

interface NavLinkProps {
  menuItem: NavigationItem;
}

const NavLink = ({ menuItem }: NavLinkProps) => {
  const { isOpen, onToggle } = useDisclosure();
  
  if (menuItem.children) {
    return (
      <Menu>
        <MenuButton
          as={Button}
          size="sm"
          variant="navigation"
          rightIcon={<Icon onClick={onToggle}>{isOpen ? <path d={mdiChevronUp} /> : <path d={mdiChevronDown} />}</Icon>}
        >
          {menuItem.title}
        </MenuButton>
        <MenuList>
          {menuItem.children.map((child, i) => (
            <MenuItem key={i} as={Link} href={buildRelativeUrl(child.path, menuItem.path)}>
              {child.title}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    );
  }

  return (
    <Button size="sm" as={Link} variant="navigation" isActive={false} href={buildRelativeUrl(menuItem.path)}>
      {menuItem.title}
    </Button>
  );
};

function buildRelativeUrl(path: string, basePath = '/'): string {
  const trimmedPath = path.trim();
  const trimmedBasePath = basePath.trim();

  // Remove leading and trailing slashes from path
  const normalizedPath = trimmedPath.replace(/^\/|\/$/g, '');

  // Remove leading and trailing slashes from base path
  const normalizedBasePath = trimmedBasePath.replace(/^\/|\/$/g, '');

  // Combine base path and path with a slash
  const combinedPath = `/${normalizedPath}`;

  // If base path is not empty, add it to the combined path
  if (normalizedBasePath !== '') {
    return `/${normalizedBasePath}${combinedPath}`;
  }

  return combinedPath;
}



export default NavBar;
