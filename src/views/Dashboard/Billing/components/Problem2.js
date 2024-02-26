import React from "react";
import {
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

const Problem2 = ({ title, description, additionalDescription, additional1Description, image }) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Card minHeight='400px' width='80vw' position="relative" borderRadius='0'>
        <CardBody p='2rem'>
          <Flex flexDirection="column" alignItems="center">

            <Flex
              flexDirection="column"
              bg='100'
              align='center'
              justify='center'
              borderRadius='15px'
              position='absolute'
              top='60px'
              left='15px'
              bottom='25px'
              p="-2rem"
              width="400px"
            >
              {image}
            </Flex>

            <Flex flexDirection="column" alignItems="center" ml="30%">
              <Text fontSize='3xl' color={textColor} fontWeight='bold' textAlign='left' mb='1.5rem' position='relative' ml="3.5rem">
                {title}
              </Text>

              <Text fontSize='md' color={textColor} fontWeight='normal' textAlign="center">
                {description}
              </Text>

              <Text fontSize='md' color={textColor} fontWeight='normal' textAlign="left" mt="1.5rem" ml="3.5rem">
                {additionalDescription}
              </Text>

              <Text fontSize='md' color={textColor} fontWeight='normal' textAlign="left" mt="1.5rem" ml="3.5rem">
                {additional1Description}
              </Text>
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default Problem2;
