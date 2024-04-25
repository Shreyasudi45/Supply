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
import { FaBars, FaEllipsisV, FaTrash, FaEdit  } from 'react-icons/fa';

const BuiltByDevelopers = () => {
  
  const [formData, setFormData] = useState({});
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    if (location.state && location.state.formData) {
      setFormData(location.state.formData);
    }
  }, [location.state]);
  // Sample data for pagination
  const [orders, setOrders] = useState([
    {
      orderNumber: "1234567",
      mrn: "8987",
      patientName: "John Doe",
      facilityName: "Two Oaks",
      clinician: "Dr. Johnson",
      orderType: "Consultation",
      orderDate: "2024-03-25",
      orderStatus: "Completed",
    },
    
  ]);

  // Pagination logic
  const [
    currentPage,
    setCurrentPage]= useState(1);
    const ordersPerPageOptions = [5, 10, 25, 50];
  const [ordersPerPage, setOrdersPerPage] = useState(ordersPerPageOptions[0]); // State for orders per page

  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  
  const handleDeleteOrder = (orderNumber) => {
    const updatedOrders = orders.filter(
      (order) => order.orderNumber !== orderNumber
    );
    // Update the state with the filtered orders
    setOrders(updatedOrders);
    
  };
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
          <Link to="/">Dashboard</Link> / Dashboard 
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
                <Link to="/dashboard/home">Send to Billing</Link>
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
      {/* Filter Options */}
      <Flex p={10} flexDirection="column" alignItems="center">
        <Flex mb={7} alignItems="center">
          {/* Search By */}
          <Box flex="1" mr={4}>
            <Text textAlign="left">Search by</Text>
            <Select width="700px"> {/* Increase the width here */}
              <option value="Patient Name">Patient Name</option>
              <option value="Order #">Order #</option>
              <option value="EMR">EMR</option>
              <option value="Order Type">Order Type</option>
              <option value="Order Status">Order Status</option>
            </Select>
          </Box>
          {/* Facility */}
          <Box flex="1" ml={4} >
            <Text textAlign="left">Facility</Text>
            <Select width="700px"> {/* Increase the width here */}
              <option value="facility1">Two Oaks</option>
              <option value="facility2">Three Oaks</option>
              {/* Add more options as needed */}
            </Select>
          </Box>
        </Flex>
        {/* Search */}
        <Flex alignItems="center">
          <Box flex="1">
            <Select width="600px"> 
              <option value="search1">Search for last week</option>
              <option value="search2">Search for last month</option>
              <option value="search3">Search for last 3 months</option>
            </Select>
          </Box>
        </Flex>
        {/* Create Order Button */}
      <Box ml="auto" mt={3}>
        <Link to="/activeusers">
          <Button colorScheme="blue" size="md" style={{ backgroundColor: '#60beeb', color: 'white' }}>
            Create Patient
          </Button>
        </Link>
      </Box>
      <Box ml="auto" mt={3}>
          <Button colorScheme="blue" size="md" style={{ backgroundColor: '#60beeb', color: 'white' }}>
           Export
          </Button>
      </Box>
      {/* Data Table */}
      <Box width="98%" overflowX="auto" mt={6}>
        <Table variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th>Order Number</Th>
              <Th>Patient Name</Th>
              <Th>MRN</Th>
              <Th>Facility Name</Th>
              <Th>Clinician</Th>
              <Th>Order Type</Th>
              <Th>Order Date</Th>
              <Th>Order Status</Th>
              <Th>Action</Th>{" "} {/* New column for Modify */}
            </Tr>
          </Thead>
          <Tbody>
          {orders
          .slice((currentPage - 1) * ordersPerPage, currentPage * ordersPerPage)
          .map((order => (
                <Tr key={order.orderNumber}>
                  <Td>{order.orderNumber}</Td>
                  <Td>{order.mrn}</Td>
                  <Td>{order.patientName}</Td>
                  <Td>{order.facilityName}</Td>
                  <Td>{order.clinician}</Td>
                  <Td>{order.orderType}</Td>
                  <Td>{order.orderDate}</Td>
                  <Td>{order.orderStatus}</Td>
                  <Td>
                  <Icon as={FaTrash} mr={2} onClick={() => handleDeleteOrder(order.orderNumber)} />
                   <Link to="/modify"><Icon as={FaEdit} /></Link>
                        
                  </Td>
                 
                </Tr>
              )))}
            </Tbody>
            
            </Table>
            </Box>
            <Flex justifyContent="flex-end" mt={8}>
            <Text ml={2} mt={1} color="black">
  Orders per page
</Text>
            <Select
          value={ordersPerPage}
          onChange={(e) => {
            setOrdersPerPage(parseInt(e.target.value));
            setCurrentPage(1); // Reset to first page when changing orders per page
          }}
          ml={4}
          width="auto"
        >
          {ordersPerPageOptions.map((perPage) => (
            <option key={perPage} value={perPage}>
              {perPage} 
            </option>
          ))}
        </Select>
        
            
    </Flex>
    </Flex>
    </Flex>
  );
};

export default BuiltByDevelopers;
