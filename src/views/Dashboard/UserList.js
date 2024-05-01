import React, { useState, useEffect } from "react";
import axios from "axios";
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
  Link as ChakraLink,
} from "@chakra-ui/react";
import { FaBars, FaSearch, FaEdit, FaTrash } from 'react-icons/fa';

const UserList = () => {
  const [users, setUsers] = useState([
    {
      firstName: "John",
      lastName: "Doe",
      email: "abc@gmail.com",
      role: "Consultant",
    },
  ]);
  const location = useLocation(); 
  const history = useHistory();

  useEffect(() => {
    // Fetch user data from the backend when the component mounts
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://hcaapi.kairosrp.com/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
    
  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`https://hcaapi.kairosrp.com/api/users/${userId}`);
      setUsers(users.filter(user => user.id !== userId));
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  
   
  const handleLogout = () => {
    
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
          <Link to="/">User List</Link> 
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
      <Text textAlign="center" fontSize="5xl" mt={3} color="#60beeb">User List</Text>
      <Box ml="auto" mt={3} mr={7}>
        <Button colorScheme="blue" size="md" style={{ backgroundColor: '#60beeb', color: 'white' }}>
            Create User
          </Button>
        </Box>
      {/* Data Table */}
      <Flex justifyContent="center" mt={6}>
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
          {users.map(user=> (
              <Tr key={user.id}>
                <Td>{user.firstName}</Td>
                <Td>{user.lastName}</Td>
                <Td>{user.email}</Td>
                <Td>{user.role}</Td>
                <Td>
                  <Flex alignItems="center">
                    <Link to={`/search/${user.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                      <Icon as={FaSearch} color="black" marginRight="3"/>
                    </Link>
                    <Link to={`/modify/${user.id}`}>
                      <Icon as={FaEdit} color="black" marginRight="3"/>
                    </Link>
                    <Icon as={FaTrash} color="black" onClick={() => handleDeleteOrder(user.id)} />
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

export default UserList;
