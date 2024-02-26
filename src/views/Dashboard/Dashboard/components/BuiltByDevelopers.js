// Chakra imports
import {
  //Button,
  Flex,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React from "react";
// react icons
//import { BsArrowRight } from "react-icons/bs";

const BuiltByDevelopers = ({ title, name, description, image }) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
    <Card minHeight='3px'  width='80vw' position="relative" borderRadius='0' >
      <CardBody p='2rem'>
        <Flex flexDirection= "column" >
          {/*<Flex
            flexDirection='column'
            h='100%'
            justifyContent='center'
            alignItems='center'
            height='100%'
            //lineHeight='1.6'
            //width={{lg: "40%" }}
  >*/}
            <Text fontSize='4xl' color={textColor} fontWeight='bold' textAlign='center' mb='2.5rem'>
            {title}
            <span
              style={{
                display: "block",
                width: "9%", // Adjust the width to control the length of the underline
                height: "7px",
                backgroundColor: useColorModeValue("blue", "white"),
                margin: "0.5rem auto", // Add margin top for spacing
                height: "5px",
              }}
            />
              
              </Text>
            
            {/*<Flex
            flexDirection="column"
            alignItems="center"
            textAlign="center"
>*/}
            <Text fontSize='md' color={textColor} fontWeight='bold' fontStyle='italic' pb='2rem' textAlign="center">
              {name}
            </Text>
            <Text fontSize='sm' color={textColor} fontWeight='normal' textAlign="center" >
              {description}
              
              </Text>
              </Flex>
              </CardBody>
              <Flex
              flexDirection="column"
            bg='100'
            align='flex-start'
            justify='center'
            borderRadius='15px'
            position='absolute'
            bottom='2rem'
            left='2rem'
            p="-2rem"
            >
            {image}
            {/*<Text
            fontSize="sm"
            color={textColor}
            fontWeight="normal"
            textAlign="center"
            mt="1rem"
          >{imageText}
</Text>*/}
          </Flex>
            
            {/*</Flex>*/}
            {/*<Spacer />
            <Flex align='center'>
              {/*<Button
                p='0px'
                variant='no-hover'
                bg='transparent'
                my={{ sm: "1.5rem", lg: "0px" }}>
                <Text
                  fontSize='sm'
                  color={textColor}
                  fontWeight='bold'
                  cursor='pointer'
                  transition='all .5s ease'
                  my={{ sm: "1.5rem", lg: "0px" }}
                  _hover={{ me: "4px" }}>
                  
                </Text>
                <Icon
                  as={BsArrowRight}
                  w='20px'
                  h='20px'
                  fontSize='2xl'
                  transition='all .5s ease'
                  mx='.3rem'
                  cursor='pointer'
                  pt='4px'
                  _hover={{ transform: "translateX(20%)" }}
  />
              </Button>*/}
            {/*</Flex>
          </Flex>*/}
          
          </Card>
          
        </Flex>
      
    );
};

export default BuiltByDevelopers;
