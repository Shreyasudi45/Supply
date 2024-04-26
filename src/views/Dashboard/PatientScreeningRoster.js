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
} from "@chakra-ui/react";
import { FaBars, FaCheck, FaTimes} from 'react-icons/fa';

const PatientScreeningRoster = () => {
  
  const [formData, setFormData] = useState({});
  const [orders, setOrders] = useState([
    {
      
      firstName: "John",
      lastName: "Doe",
      mbi: "PCC",
      dob: "25-03-2024",
      room: "203",
      gender: "Male",
      address: "Abc",
      city: "Xyz",
      state: "def",
      zipCode: "25896",
      physician: "Dr. john",
      
    },
  ]);

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
          <Link to="/">Patient Screening Roster</Link> 
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
      <Text textAlign="center" fontSize="5xl" mt={3} color="#60beeb">Patient Screening Roster</Text>
      {/* Data Table */}
      <Flex justifyContent="center" mt={6}>
      <Box width="98%" overflowX="auto" mt={6}>
        <Table variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>MBI</Th>
              <Th>DOB</Th>
              <Th>Room</Th>
              <Th>Gender</Th>
              <Th>Address</Th>
              <Th>City</Th>
              <Th>State</Th>
              <Th>Zip Code</Th>
              <Th>Physician</Th>
              <Th>Action</Th>{" "} {/* New column for Modify */}
            </Tr>
          </Thead>
          <Tbody>
          {orders.map((order, index) => (
              <Tr key={index}>
                <Td>{order.firstName}</Td>
                <Td>{order.lastName}</Td>
                <Td>{order.mbi}</Td>
                <Td>{order.dob}</Td>
                <Td>{order.room}</Td>
                <Td>{order.gender}</Td>
                <Td>{order.address}</Td>
                <Td>{order.city}</Td>
                <Td>{order.state}</Td>
                <Td>{order.zipCode}</Td>
                <Td>{order.physician}</Td>
                <Td>
                  <Flex alignItems="center">
                      <Icon as={FaCheck} color="black" marginRight="3"/>
                    <Icon as={FaTimes} color="black" onClick={() => handleDeleteOrder(index)} />
                  </Flex>
                </Td>
              </Tr>
          ))}
                 
                 
                
            </Tbody>
            
            </Table>
            </Box>
            
        </Flex>
            
    </Flex>
    
    
  );
};

export default PatientScreeningRoster;
