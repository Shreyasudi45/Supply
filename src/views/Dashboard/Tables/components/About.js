import {
    Flex,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  import Card from "components/Card/Card.js";
  import CardBody from "components/Card/CardBody.js";
  import React from "react";
  
  
  const About = ({ backgroundImage}) => {
    const textColor = useColorModeValue("gray.700", "white");
    return(
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Card minHeight='400px'  width='80vw' position="relative" borderRadius='0' backgroundImage={`url(${backgroundImage})`} 
          backgroundSize="cover">
        <CardBody p='2rem'>
      
          </CardBody>
          <div style={{ position: 'absolute', top: '12rem', left: '2rem', right: '0', transform: 'translateY(-50%)', textAlign: 'left', color: "#00B5D8", zIndex: 1 }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Companies wishing to alter the trajectory of healthcare spend can focus on –</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginLeft: '1rem' }}>
            <div><span style={{ marginRight: '0.5rem' }}>1.</span> the employee experience and/or</div>
            <div><span style={{ marginRight: '0.5rem' }}>2.</span> population management. </div>
            <div>The former focuses on the employees’ experience and strives to help them navigate through the challenging waters of healthcare. Often, this approach does not necessarily save the employer money and if it does, it may do so indirectly.Population (and disease) management may use predictive analytics and risk assessment to help guide decision making and pare costs for employers. Milligram listens to the needs of the company and their employees and works with the employer as a strategic partner to mitigate those needs, in particular, lowering costs. Milligram can serve as analyst, consultant and strategist, and advocate.</div>
          </div>
        </div>
          
          </Card>
          </Flex>
          );
  };
    
  
  export default About;
  