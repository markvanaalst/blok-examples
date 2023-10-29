import { Button, Container, Flex, Heading, Text, Image, Stack, useColorMode, useColorModeValue, Icon, Link, Card, CardBody } from "@chakra-ui/react"
import { mdiArrowRight } from "@mdi/js";
import NextLink from 'next/link';
import { text } from "stream/consumers";

interface CallToActionProps {
  title: string
  description: string
  link: {
    text: string
    url: string
  }
}

const CallToAction = ({title, description, link} : CallToActionProps) => {
    return (
      <Card variant="elevated">
      <CardBody>
        <Heading as="h2" mb={4} fontSize={'5xl'}>
          {title}
        </Heading>
        <Text size={'large'} mb={6}>
          {description}
        </Text>
          <Button size={'lg'} variant={'solid'} rightIcon={
            <Icon>
              <path d={mdiArrowRight} />
            </Icon>
          }>
          <Link href={link.url} as={NextLink}>
            {link.text}
          </Link>
        </Button>
      </CardBody>
    </Card>
    )
}
    
export default CallToAction