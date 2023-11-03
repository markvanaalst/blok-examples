import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import PageLayout from "@/layout/PageLayout";
import SidebarNavigation from "@/components/Sidebar";
import navData from '../../../data/sidebar.json';

export default function Home() {
  return (
    <PageLayout>
      <Box layerStyle="section.main">
        
        <Heading size='md' mb='8'>Sidebar navigation</Heading>

        <SidebarNavigation navigationData={navData} />
      </Box>
    </PageLayout>

  )
};