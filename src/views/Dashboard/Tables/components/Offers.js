import {
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React from "react";


const Offers = ({ title, name, image }) => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Card minHeight='700px' width='80vw' position="relative" borderRadius='0'>
        <CardBody p='2rem'>
          <Flex flexDirection="column" alignItems="center">
            <Text fontSize='4xl' color={textColor} fontWeight='bold' textAlign='center' mb='2.5rem' position='relative'>
              {title}
            </Text>
            <Text fontSize='md' color={textColor} fontWeight='bold' fontStyle='italic' pb='2rem' textAlign="center">
              {name}
            </Text>
          </Flex>
        </CardBody>
        <Flex
          flexDirection="column"
          bg='100'
          align='center'
          justify='center'
          borderRadius='15px'
          position='absolute'
          top='18px'
          bottom='-100px'
          left='50%'
          transform="translateX(-50%)"
          p="-2rem"
          width="800px"
          height="800px"
        >
          {image}
        </Flex>
      </Card>
    </Flex>
  );
};

export default Offers;
