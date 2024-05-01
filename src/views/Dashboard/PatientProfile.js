import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Icon,
  Link as ChakraLink
} from "@chakra-ui/react";
import { FaBars  } from 'react-icons/fa';

const PatientProfile= () => {
  
  const [formData, setFormData] = useState({});
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    if (location.state && location.state.formData) {
      setFormData(location.state.formData);
    }
  }, [location.state]);
  


  const handleLogout = () => {
    // Perform logout actions, e.g., clear session/local storage, etc.
    // Then navigate to the sign-in page
    history.push("/signin");
  };

  return (
    <Flex flexDirection="column" h="100vh">
      {/* Navbar */}
      <Flex
        bg="#60beeb"
        w="100%"
        p={4}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Left side */}
        <Box>
          <Menu>
            <MenuButton as={Button} bg="#60beeb" color="white" mr={2}>
            <Icon as={FaBars} mr={2} />Dashboard 
            </MenuButton>
             {/* Breadcrumbs */}
       <Flex justifyContent="center" mb={3}>
        <Text fontSize="lg" color="white">
          <Link to="/">Patient Profile</Link> 
          <Link to="/builtbydevelopers"> / Dashboard</Link>
        </Text>
      </Flex>
      <MenuList>
  <ChakraLink as={Link} to="/builtbydevelopers">
    <MenuItem>
      Dashboard
    </MenuItem>
  </ChakraLink>
  <ChakraLink as={Link} to="/loadpatientdata">
    <MenuItem>
      Load Data
    </MenuItem>
  </ChakraLink>
  <ChakraLink as={Link} to="/patientscreeningroster">
    <MenuItem>
      Patient Screening Roster
    </MenuItem>
  </ChakraLink>
  <ChakraLink as={Link} to="/dashboard/home">
    <MenuItem>
      Send to Billing
    </MenuItem>
  </ChakraLink>
  <ChakraLink as={Link} to="/userlist">
    <MenuItem>
      Users
    </MenuItem>
  </ChakraLink>
  <ChakraLink as={Link} to="/patientprofile">
    <MenuItem>
      Roles
    </MenuItem>
  </ChakraLink>
</MenuList>
          </Menu>
        </Box>
        {/* Right side */}
        <Box>
          <Menu>
            <MenuButton>
              <Avatar size="sm" name="User Name" mr={2} />
              
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link to="/profile">Profile</Link>
              </MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
      <Text textAlign="center" fontSize="5xl" mt={3} color="#60beeb">Patient Profile</Text>
      <Flex justifyContent="center" mt={4}>
        <Button mr={10}>General Information</Button>
        <Button mr={10}>Additional Information</Button>
        <Button mr={10}>Document</Button>
        <Button mr={10}>Notes</Button>
        <Button>Order</Button>
      </Flex>
      <Flex justifyContent="flex-end" mt={400} >
        <Button variant="outline" colorScheme="teal" mr={10}>Send for Signature</Button>
        <Button colorScheme="teal"mr={30}>Generate SCOP</Button>
      </Flex>
      </Flex>
    
  );
};

export default PatientProfile;
