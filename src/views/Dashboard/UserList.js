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
import { FaBars, FaSearch, FaEdit, FaTrash } from 'react-icons/fa';

const UserList = () => {
  
  const [formData, setFormData] = useState({});
  const [orders, setOrders] = useState([
    {
      
      firstName: "John",
      lastName: "Doe",
      email: "abc@gmail.com",
      role: "Doctor",
      
      
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
          <Link to="/">User List</Link> / Dashboard 
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
            <MenuButton as={Button} variant="outline" colorScheme="whiteAlpha">
              <Avatar size="sm" name="User Name" mr={2} />
              <Text color="white" mr={2}>User</Text>
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
      <Text textAlign="center" fontSize="5xl" mt={3} color="#60beeb">User List</Text>
      {/* Data Table */}
      <Box width="98%" overflowX="auto" mt={6}>
        <Table variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>E-mail</Th>
              <Th>Role</Th>
              <Th>Action</Th>{" "} {/* New column for Modify */}
            </Tr>
          </Thead>
          <Tbody>
          {orders.map((order, index) => (
              <Tr key={index}>
                <Td>{order.firstName}</Td>
                <Td>{order.lastName}</Td>
                <Td>{order.email}</Td>
                <Td>{order.role}</Td>
                <Td>
                  <Flex alignItems="center">
                    <Link to={`/search/${index}`} style={{ textDecoration: "none", color: "inherit" }}>
                      <Icon as={FaSearch} color="black" marginRight="3"/>
                    </Link>
                    <Link to={`/modify/${index}`}>
                      <Icon as={FaEdit} color="black" marginRight="3"/>
                    </Link>
                    <Icon as={FaTrash} color="black" onClick={() => handleDeleteOrder(index)} />
                  </Flex>
                </Td>
              </Tr>
          ))}
                 
                 
                
            </Tbody>
            
            </Table>
            </Box>
            
        
            
    </Flex>
    
    
  );
};

export default UserList;
