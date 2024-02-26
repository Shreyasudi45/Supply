import {
    Flex,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  import Card from "components/Card/Card.js";
  import CardBody from "components/Card/CardBody.js";
  import React from "react";
  
  
  const Billing = ({ backgroundImage}) => {
    const textColor = useColorModeValue("gray.700", "white");
    return(
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Card minHeight='350px'  width='80vw' position="relative" borderRadius='0' backgroundImage={`url(${backgroundImage})`} 
          backgroundSize="cover">
        <CardBody p='2rem'>
      
          </CardBody>
          
          </Card>
          </Flex>
          );
  };
    
  
  export default Billing;
  