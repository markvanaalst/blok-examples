import { Box, Button, Heading, Wrap } from "@chakra-ui/react";
import React from "react";
import PageLayout from "@/layout/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      <Box layerStyle="section.main">
        <Heading>Blank</Heading>

        
        Normal <Button variant="ghost" >Delete</Button><br />
        Scheme <Button variant="ghost" colorScheme="danger">Delete</Button><br/>
        
        
        <Button variant="ghost" textColor={'neutral'} colorScheme="danger">Delete</Button>
        
      </Box>
    </PageLayout>
  );
}
