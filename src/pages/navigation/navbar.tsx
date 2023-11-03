import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import PageLayout from "@/layout/PageLayout";
import NavBar from "@/components/Navbar";
import navData from '../../../data/example-navbar.json';

export default function Home() {
  return (
    <PageLayout title="Navigation Bar">
      <Box layerStyle="section.main">
        
        <Heading size='md' mb='8'>Primary navigation</Heading>

        <NavBar navigationData={navData} />
      </Box>
    </PageLayout>
  );
}
