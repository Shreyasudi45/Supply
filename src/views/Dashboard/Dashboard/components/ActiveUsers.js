import {
  Flex,
  Text,
  image,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React from "react";


const ActiveUsers = ({ backgroundImage, image}) => {
  const textColor = useColorModeValue("gray.700", "white");
  
  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
    <Card minHeight='400px'  width='80vw' position="relative" borderRadius='0' backgroundImage={`url(${backgroundImage})`} 
        backgroundSize="cover">
      <CardBody p='2rem' style={{ marginBottom: '20px' }}>
        <Flex flexDirection= "column" alignItems="center">
        {/*<Text fontSize='4xl' color={textColor} fontWeight='bold' textAlign='center' mb='2.5rem' position='relative'>
            {title}
            <span
              style={{
                display: "block",
                width: "17%", // Adjust the width to control the length of the underline
                height: "7px",
                backgroundColor: useColorModeValue("blue", "white"),
                margin: "0.5rem auto", // Add margin top for spacing
                height: "5px",
              }}
            />
              
            </Text>*/}
            <div style={{ position: 'absolute', top: '15%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: "black", zIndex: 1 }}>
          <h1 style={{ fontSize: "2rem" }}>Milligram Features & Benefits</h1>
          
        </div>
             
              </Flex>
              
              </CardBody>
              <Flex
              flexDirection="column"
            bg='100'
            align='center'
            justify='center'
            borderRadius='15px'
            position='absolute'
            top='5px'
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
  

export default ActiveUsers;
