import {
  Flex,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React from "react";

const SalesOverview = ({ title, description }) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
    <Card minHeight='400px'  width='80vw' position="relative" borderRadius='0' >
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
            <Text fontSize='4xl' color={textColor} fontWeight='bold' textAlign='center' mb='2.5rem' position='relative'>
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
            <Text fontSize='sm' color={textColor} fontWeight='normal' textAlign="center" >
              {description}
              
              </Text>
              </Flex>
              </CardBody>
            
          
          </Card>
          
          </Flex>
        
      );
  };
  
  export default SalesOverview;
  