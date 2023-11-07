import { Box, Button, ButtonGroup, Collapse, Heading, Icon, Stack, Text, Tooltip, Wrap, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { mdiChevronDown, mdiChevronRight } from '@mdi/js';
import { default as NextLink } from 'next/link';
import { useRouter } from 'next/router';

interface SidebarNavigationProps {
  title?: string;
  navigationData: SidebarNavigation;
}

export type SidebarNavigation = {
    title: string;
    description: string;
    heading: boolean;
    path: string;
    routes: SidebarNavigationItem[];
  };
  
  export type SidebarNavigationItem = {
    title: string;
    path: string;
    children?: SidebarNavigationItem[];
  };
  

// Use dummy data to render the sidebar
const SidebarNavigation = ({ navigationData }: SidebarNavigationProps) => {
  const basePath = navigationData.path;

  return (
    <Box as={'aside'} boxSize={'3xs'}>
      <Wrap layerStyle="" direction="column" display="flex" flexFlow="column nowrap">
        
        {navigationData.heading && (
          <Heading size="sm">
            {navigationData.title}
          </Heading>
        )}

        {navigationData?.routes.map((link, i) => {
          return (
            <Wrap key={i}>
              <Heading variant="section" px={2.5} fontWeight={'bold'}>
                {link.title}
              </Heading>
              <ButtonGroup variant="navigation" orientation="vertical" spacing="1" mx={-2} width={'full'}>
                {link.children && link.children?.length > 0 && RenderMenuItems(link, buildPath(basePath, link.path))}
              </ButtonGroup>
            </Wrap>
          );
        })}
      </Wrap>
    </Box>
  );
};

function RenderMenuItems(link: SidebarNavigationItem, currentBasePath: string): React.ReactNode {
  const router = useRouter();
  return (
    <Stack py={0}>
      {link.children?.map((child, i) => {
        const childUrl = buildPath(currentBasePath, child.path);

        return (
          <React.Fragment key={i}>
            {!child.children ? (
              <Tooltip label={child.title} aria-label={child.title}>
                <Button as={NextLink} href={childUrl} key={i} isActive={router.asPath == childUrl}>
                  <Text maxW={190} isTruncated px={2}>
                    {child.title}
                  </Text>
                </Button>
              </Tooltip>
            ) : (
                RenderDropdown(i, child, childUrl)
            )}
          </React.Fragment>
        );
      })}
    </Stack>
  );
}

function RenderDropdown(i: number, child: SidebarNavigationItem, basePath: string): React.ReactNode {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();

  return (
    <React.Fragment key={i}>
      <Tooltip label={child.title} aria-label="A tooltip">
        <Button
          rightIcon={router.asPath.includes(basePath) ? undefined : <Icon onClick={onToggle}>{isOpen ? <path d={mdiChevronDown} /> : <path d={mdiChevronRight} />}</Icon>}
          pl={3}
          justifyContent={'space-between'}
          width={'full'}
          transition={'ease-in-out'}
          isActive={isOpen}
        >
          {child.path ? (
            <Text as={NextLink} href={basePath} maxW={190} isTruncated px={2}>
              {child.title}
            </Text>
          ) : (
            <Text maxW={190} isTruncated px={2}>
              {child.title}
            </Text>
          )}
        </Button>
      </Tooltip>

      <Collapse in={router.asPath.includes(basePath) ? !isOpen : isOpen} animateOpacity>
        <Box pl={2}>{child.children && child.children?.length > 0 && RenderMenuItems(child, basePath)}</Box>
      </Collapse>
    </React.Fragment>
  );
}

function buildPath(basePath: string, path: string): string {
    const trimmedBasePath = basePath.trim();
    const trimmedPath = path.trim();
  
    if (trimmedBasePath.endsWith('/')) {
      return `${trimmedBasePath}${trimmedPath}`;
    } else {
      return `${trimmedBasePath}/${trimmedPath}`;
    }
  }

export default SidebarNavigation;
