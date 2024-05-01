import React, { useState } from "react";
import { Flex, Box, Menu, MenuButton, MenuItem, MenuList, Button, Avatar, Text, Icon, Grid, GridItem, Input, Link as ChakraLINk } from "@chakra-ui/react";
import { FaBars } from 'react-icons/fa';
import { Link, useHistory  } from "react-router-dom";

const Modify = () => {
  const [eligible, setEligible] = useState("");
  const [clinicianFirstName, setClinicianFirstName] = useState("");
  const [mrn, setMrn] = useState(""); 
  const [clinicianLastName, setClinicianLastName] = useState(""); 
  const [patientFirstName, setPatientFirstName] = useState(""); 
  const [orderType, setOrderType] = useState(""); 
  const [patientLastName, setPatientLastName] = useState(""); 
  const [visitDate, setVisitDate] = useState(""); 
  const [facilityName, setFacilityName] = useState(""); 
  const [signingDate, setSigningDate] = useState(""); 
  const [providerFirstName, setProviderFirstName] = useState(""); 
  const [coverage, setCoverage] = useState(""); 
  const [providerLastName, setProviderLastName] = useState(""); 
  const [status, setStatus] = useState(""); 
  const [clinicianNotes, setClinicianNotes] = useState(""); 
  
  const history = useHistory();
  const handleCancel = () => {
    setEligible("");
    setClinicianFirstName("");
    setMrn("");
    setClinicianLastName("");
    setPatientFirstName("");
    setOrderType("");
    setPatientLastName("");
    setVisitDate("");
    setFacilityName("");
    setSigningDate("");
    setProviderFirstName("");
    setStatus("");
    setProviderLastName("");
    setCoverage("");
    setClinicianNotes("");
  };

  const handleDeleteProfile = () => {
    
  };

  const handleUpdateMoreDetails = () => {
    history.push("/updatemoredetails");
  };

  const handleSubmit = () => {
    const formData = {
      eligible,
      clinicianFirstName,
      mrn,
      clinicianLastName,
      patientFirstName,
      orderType,
      patientLastName,
      visitDate,
      facilityName,
      signingDate,
      providerFirstName,
      status,
      providerLastName,
      coverage,
      clinicianNotes
    };
    history.push({
      pathname: '/builtbydevelopers',
      state: { formData }
    });
  };

  return (
    <Flex flexDirection="column" h="100vh">
      {/* Navbar */}
      <Flex bg="#60beeb" w="100%" p={4} alignItems="center" justifyContent="space-between">
        {/* Left side */}
        <Box>
          <Menu>
            <MenuButton as={Button} bg="#60beeb" color="white" mr={2}>
            <Icon as={FaBars} mr={2} />Dashboard 
            </MenuButton>
            {/* Breadcrumbs */}
       <Flex justifyContent="center" mb={3}>
        <Text fontSize="lg" color="white">
          <Link to="/">Modify Order</Link>
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
              <MenuItem>
                <Link to="/logout">Logout</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
      <Text textAlign="center" fontSize="5xl" mt={3} color="#60beeb">Modify Existing Order</Text>
      <Flex justifyContent="space-around" mt={3} mx={4}>
      <Flex flexDirection="column" alignItems="center">
        <Text textAlign="center" fontSize="2xl">ELIGIBLE?</Text>
        <Box bg="gray.100" p={4} mt={2} width="400px">
         <Input value={eligible} onChange={(e) => setEligible(e.target.value)} placeholder="Eligible ?" color="black"/>
        </Box>
          </Flex>
          <Flex flexDirection="column" alignItems="center">
        <Text textAlign="center" fontSize="2xl">CLINICIAN FIRST NAME</Text>
        <Box bg="gray.100" p={4} mt={2} width="400px">
        <Input value={clinicianFirstName} onChange={(e) => setClinicianFirstName(e.target.value)} placeholder="Enter clinician first name" color="black"/> 
          </Box>
        </Flex>
      </Flex>
      <Flex justifyContent="space-around" mt={4} mx={4}>
      <Flex flexDirection="column" alignItems="center">
        <Text textAlign="center" fontSize="2xl">MRN</Text>
        <Box bg="gray.100" p={4} mt={2} width="400px">
        <Input value={mrn} onChange={(e) => setMrn(e.target.value)} placeholder="Enter MRN" color="black"/>
          </Box>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
        <Text textAlign="center" fontSize="2xl">CLINICIAN LAST NAME</Text>
        <Box bg="gray.100" p={4} mt={2} width="400px">
        <Input value={clinicianLastName} onChange={(e) => setClinicianLastName(e.target.value)} placeholder="Enter clinician last name" color="black"/>
          </Box>
        </Flex>
      </Flex>
      <Flex justifyContent="space-around" mt={4} mx={4}>
      <Flex flexDirection="column" alignItems="center">
        <Text textAlign="center" fontSize="2xl">PATIENT FIRST NAME</Text>
        <Box bg="gray.100" p={4} mt={2} width="400px">
        <Input value={patientFirstName} onChange={(e) => setPatientFirstName(e.target.value)} placeholder="Enter patient first name" color="black"/>
          </Box>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
        <Text textAlign="center" fontSize="2xl">ORDER TYPE</Text>
        <Box bg="gray.100" p={4} mt={2} width="400px">
        <Input value={orderType} onChange={(e) => setOrderType(e.target.value)} placeholder="Enter order type" color="black"/>
          </Box>
        </Flex>
      </Flex> 
      <Flex justifyContent="space-around" mt={4} mx={4}>
      <Flex flexDirection="column" alignItems="center">
        <Text textAlign="center" fontSize="2xl">PATIENT LAST NAME</Text>
        <Box bg="gray.100" p={4} mt={2} width="400px">
        <Input value={patientLastName} onChange={(e) => setPatientLastName(e.target.value)} placeholder="Enter patient last name" color="black"/>
          </Box>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
        <Text textAlign="center" fontSize="2xl">VISIT DATE</Text>
        <Box bg="gray.100" p={4} mt={2} width="400px">
        <Input value={visitDate} onChange={(e) => setVisitDate(e.target.value)} placeholder="Enter visit date" color="black"/>
          </Box>
        </Flex>
      </Flex>
      <Flex justifyContent="space-around" mt={4} mx={4}>
      <Flex flexDirection="column" alignItems="center">
        <Text textAlign="center" fontSize="2xl">FACILITY NAME</Text>
        <Box bg="gray.100" p={4} mt={2} width="400px">
        <Input value={facilityName} onChange={(e) => setFacilityName(e.target.value)} placeholder="Enter facility name" color="black"/>
          </Box>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
        <Text textAlign="center" fontSize="2xl">SIGNING DATE</Text>
        <Box bg="gray.100" p={4} mt={2} width="400px">
        <Input value={signingDate} onChange={(e) => setSigningDate(e.target.value)} placeholder="Enter signing date" color="black"/>
          </Box>
        </Flex>
      </Flex>
      <Flex justifyContent="space-around" mt={4} mx={4}>
      <Flex flexDirection="column" alignItems="center">
        <Text textAlign="center" fontSize="2xl">PROVIDER FIRST NAME</Text>
        <Box bg="gray.100" p={4} mt={2} width="400px">
        <Input value={providerFirstName} onChange={(e) => setProviderFirstName(e.target.value)} placeholder="Enter provider first name" color="black" />
          </Box>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
        <Text textAlign="center" fontSize="2xl">STATUS</Text>
        <Box bg="gray.100" p={4} mt={2} width="400px">
        <Input value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Enter status" color="black" />
          </Box>
        </Flex>
      </Flex>
      <Flex justifyContent="space-around" mt={4} mx={4}>
      <Flex flexDirection="column" alignItems="center">
        <Text textAlign="center" fontSize="2xl">PROVIDER LAST NAME</Text>
        <Box bg="gray.100" p={4} mt={2} width="400px">
        <Input value={providerLastName} onChange={(e) => setProviderLastName(e.target.value)} placeholder="Enter provider last name" color="black" />
          </Box>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
        <Text textAlign="center" fontSize="2xl">COVERAGE</Text>
        <Box bg="gray.100" p={4} mt={2} width="400px">
        <Input value={coverage} onChange={(e) => setCoverage(e.target.value)} placeholder="Enter coverage" color="black"/>
          </Box>
        </Flex>
      </Flex>
      <Flex justifyContent="space-around" mt={4} mx={4}>
      <Flex flexDirection="column" alignItems="center">
        <Text textAlign="center" fontSize="2xl">CLINICIAN NOTES</Text>
        <Box bg="gray.100" p={4} mt={2} width="400px">
        <Input value={clinicianNotes} onChange={(e) => setClinicianNotes(e.target.value)} placeholder="Enter clinician notes" color="black"/>
          </Box>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
        <Text textAlign="center" fontSize="2xl">UPLOAD SUPPORTING DOCS</Text>
        <Box bg="gray.100" p={4} mt={2} width="400px">
        
          </Box>
        </Flex>
        </Flex>
      {/* Buttons */}
      <Flex justifyContent="center" mt={4}>
        <Button onClick={handleCancel} variant="outline" mr={16} color="#60beeb"
  borderColor="#60beeb" width="180px" >CANCEL</Button>
        <Button onClick={handleDeleteProfile} variant="outline" mr={16} color="red"  borderColor="red"  width="180px">DELETE PROFILE</Button>
        <Button onClick={handleUpdateMoreDetails} variant="outline" mr={16}  width="180px" style={{ backgroundColor: '#60beeb', color: 'white' }}>UPDATE MORE DETAILS</Button>
        <Button onClick={handleSubmit}  width="180px" style={{ backgroundColor: '#60beeb', color: 'white' }}>SUBMIT</Button>
      </Flex>
    </Flex>
    
  );
};

export default Modify;
