import {
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React from "react";


const Projects = ({ title,name, description, image}) => {
  const textColor = useColorModeValue("gray.700", "white");
  return(
  <Flex justifyContent="center" alignItems="center" height="100vh">
    <Card minHeight='700px'  width='80vw' position="relative" borderRadius='0' 
        >
      <CardBody p='2rem'>
      <Flex flexDirection= "column" alignItems="center">
        
      <Text fontSize='4xl' color={textColor} fontWeight='bold' textAlign='center' mb='2.5rem' position='relative'>
            {title}
            
            </Text>
        
        <Text fontSize='md' color={textColor} fontWeight='bold' fontStyle='italic' pb='2rem' textAlign="flex-end">
              {name}
            </Text>
            <Text fontSize='sm' color={textColor} fontWeight='normal' textAlign="left" >
              {description}
              
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
              top='240px'
              bottom='-115px'
              left='50%'
              transform="translateX(-50%)"
              p="-2rem"
              >
              {image}
            
            </Flex>
        </Card>
        </Flex>
        );
};
  

export default Projects;
