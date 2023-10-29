import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";

interface ExampleCardProps {
  title: string;
  description: string;
}

export const ExampleCard = ({ title, description }: ExampleCardProps) => {
  return (
    <Card cursor="pointer" layerStyle="interactive.fill" variant="outlineRaised">
      <CardHeader>
        <Heading size="sm">{title}</Heading>
      </CardHeader>
      <CardBody>
        <Text variant="subtle">{description}</Text>
      </CardBody>
    </Card>
  );
};
