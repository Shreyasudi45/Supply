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
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Icon,
  Input,
} from "@chakra-ui/react";
import { FaBars, FaCheck, FaTimes} from 'react-icons/fa';

const LoadPatientData = () => {
  
  const [formData, setFormData] = useState({});
  

  const location = useLocation();
  const history = useHistory();

  const handleDeleteOrder = (index) => {
    const updatedOrders = [...orders];
    updatedOrders.splice(index, 1);
    setOrders(updatedOrders);
  };
    // Update the state with the filtered orders
   
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
          <Link to="/">Load Patient Data</Link> 
          <Link to="/builtbydevelopers"> / Dashboard</Link>
        </Text>
      </Flex>
            <MenuList>
              <MenuItem>
                <Link to="/builtbydevelopers">Dashboard</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/loadpatientdata">Load Data</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/patientscreeningroster">Upload Facesheet</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/dashboard/profile">Send to Billing</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/userlist">Users</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/patientprofile">Roles</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        {/* Right side */}
        <Box>
          <Menu>
            <MenuButton >
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
      <Text textAlign="center" fontSize="5xl" mt={3} color="#60beeb">Generate Referral</Text>
      <Flex p={10} flexDirection="column" alignItems="center">
        <Flex mb={7} alignItems="center">
        <Box flex="1" ml={4} >
            <Text textAlign="center" marginBottom="4">FACILITY NAME</Text>
            <Select width="700px"> {/* Increase the width here */}
              <option value="facility1">facility1</option>
              <option value="facility2">facility2</option>
              {/* Add more options as needed */}
            </Select>
          </Box>
          </Flex>
          <Flex mb={7} alignItems="center">
          <Box flex="1" ml={4} >
            <Text textAlign="center" marginBottom="4">ZIP CODE</Text>
            <Input placeholder="" width="700px" />
          </Box>
        </Flex>
        <Flex mb={7} alignItems="center">
          <Box flex="1" ml={4} >
            <Text textAlign="center" marginBottom="4">ICD-10 CODES</Text>
            <Input placeholder="" width="700px" />
          </Box>
        </Flex>
        <Flex justifyContent="center">
          <Button mr={4}>VIEW RESPONSE</Button>
          <Button >SUBMIT</Button>
        </Flex>
        </Flex>
      </Flex>
    
    
  );
};

export default LoadPatientData;
