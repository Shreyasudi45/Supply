import React, { useState } from "react";
import {
  Button,
  Box,
  Flex,
  Grid,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  Input,
  FormControl,
  IconButton,
} from "@chakra-ui/react";

import {
  PiTrashFill,
  PiInfoFill,
  PiPlusBold,
  PiPencilFill,
} from "react-icons/pi";

const MedicineTable = () => {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const [isOpen, setIsOpen] = useState(false);
  const [medicineFormData, setMedicineFormData] = useState({
    name: "",
    location: "",
    quantity: "",
  });
  const [pharmacies, setPharmacies] = useState([]);
  const [searchedMedicine, setSearchedMedicine] = useState(null);
  const [isInfoOpen, setIsInfoOpen] = useState(false); // State for information dialog box
  const [selectedMedicine, setSelectedMedicine] = useState(null); // State to store selected medicine
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // State for edit modal

  const onClose = () => {
    setIsOpen(false);
    setSearchedMedicine(null); // Reset searched medicine data when closing modal
  };
  const onOpen = () => setIsOpen(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMedicineFormData({
      ...medicineFormData,
      [name]: value,
    });
  };

  const handleSearch = async () => {
    // Fetch pharmacy data based on location (use your API endpoint or data source)
    try {
      const response = await fetch(
        `your_api_endpoint?location=${medicineFormData.location}`
      );
      const data = await response.json();
      setPharmacies(data); // Set the fetched pharmacy data
    } catch (error) {
      console.error("Error fetching pharmacy data:", error);
    }
  };

  // Sample data for table
  const sampleMedicines = [
    {
      id: 1,
      name: "Medicine A",
      favoritePharmacy: "Pharmacy X",
      price: "$10",
      suggestedPharmacy: "Pharmacy Y",
      suggestedPrice: "$8",
    },
    {
      id: 2,
      name: "Medicine B",
      favoritePharmacy: "Pharmacy Z",
      price: "$15",
      suggestedPharmacy: "Pharmacy W",
      suggestedPrice: "$12",
    },
  ];

  const handleInformationClick = (medicine) => {
    // Implement logic to display information about the selected medicine
    setSelectedMedicine(medicine);
    setIsInfoOpen(true); // Open the information dialog box
  };

  const handleDeleteClick = (medicineId) => {
    // Implement logic to delete the selected medicine
    console.log("Delete clicked for medicine with ID:", medicineId);
  };

  return (
    <Flex direction="column">
      <Text
        fontWeight="bold"
        align="center"
        fontSize="xl"
        color={textColor}
        mb="4"
      >
        MY MEDICINE CABINET
      </Text>
      <Box borderBottom="1px solid" borderColor="gray.200" mb="4" />
      <Grid templateColumns="1fr" gap="24px">
        <Grid
          templateColumns="repeat(7, 1fr)"
          gap="0"
          borderBottom="1px solid"
          borderColor="gray.200"
          pb="4"
        >
          <Text fontWeight="bold" fontSize="lg" color={textColor}>
            Name of the drug
          </Text>
          <Text fontWeight="bold" fontSize="lg" color={textColor}>
            Favorite Pharmacy
          </Text>
          <Text fontWeight="bold" fontSize="lg" color={textColor}>
            Price
          </Text>
          <Text fontWeight="bold" fontSize="lg" color={textColor}>
            Suggested/Alternative Pharmacy
          </Text>
          <Text fontWeight="bold" fontSize="lg" color={textColor}>
            Price
          </Text>
          <Text fontWeight="bold" fontSize="lg" color={textColor}>
            Action
          </Text>
        </Grid>
        {sampleMedicines.map((medicine, index) => (
          <Grid
            key={index}
            templateColumns="repeat(7, 1fr)"
            gap="0"
            borderBottom="1px solid"
            borderColor="gray.200"
            pb="4"
          >
            <Text fontSize="lg">{medicine.name}</Text>
            <Text fontSize="lg">{medicine.favoritePharmacy}</Text>
            <Text fontSize="lg">{medicine.price}</Text>
            <Text fontSize="lg">{medicine.suggestedPharmacy}</Text>
            <Text fontSize="lg">{medicine.suggestedPrice}</Text>
            <Flex justifyContent="center">
              <Button
                onClick={() => handleInformationClick(medicine)}
                mr="2"
                _hover={{ bg: "blue.400" }}
                _active={{ bg: "blue.500" }}
                size="lg"
                variant="ghost"
              >
                <Icon as={PiInfoFill} />
              </Button>
              <Button
                onClick={() => handleDeleteClick(medicine.id)}
                _hover={{ bg: "red.400" }}
                _active={{ bg: "red.500" }}
                size="lg"
                variant="ghost"
              >
                <Icon as={PiTrashFill} />
              </Button>
            </Flex>
          </Grid>
        ))}
      </Grid>
      <Button
        mt="4"
        onClick={onOpen}
        bg="teal.300"
        color="white"
        _hover={{ bg: "teal.400" }}
        _active={{ bg: "teal.500" }}
        leftIcon={<Icon as={PiPlusBold} />}
      >
        ADD MEDICINE
      </Button>

      {/* Dialog Box for Medicine Form */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Medicine</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Form to add medicine */}
            <FormControl>
              <Text mb="2" fontWeight="bold">
                Name of the drug
              </Text>
              <Input
                name="name"
                value={medicineFormData.name}
                onChange={handleInputChange}
                placeholder="Enter name"
                mb="4"
              />
              <Text mb="2" fontWeight="bold">
                Close to/Zip Code/Location
              </Text>
              <Input
                name="location"
                value={medicineFormData.location}
                onChange={handleInputChange}
                placeholder="Enter location"
                mb="4"
              />
              <Text mb="2" fontWeight="bold">
                Quantity
              </Text>
              <Input
                name="quantity"
                value={medicineFormData.quantity}
                onChange={handleInputChange}
                placeholder="Enter quantity"
                mb="4"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={handleSearch}>
              Search
            </Button>
            <Button onClick={onClose}>Reset</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Dialog Box for Medicine Information */}
      <Modal isOpen={isInfoOpen} onClose={() => setIsInfoOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex justifyContent="space-between" alignItems="center">
              <Text mb="2">{selectedMedicine && selectedMedicine.name}</Text>
              <Flex>
                <Button
                  onClick={() => handleListAll()}
                  size="sm"
                  mr="2"
                  variant="ghost"
                  _hover={{ bg: "blue.400" }}
                  _active={{ bg: "blue.500" }}
                >
                  List
                </Button>
                <IconButton
                  icon={<PiPencilFill />}
                  aria-label="Edit"
                  size="sm"
                  mr="2"
                  variant="ghost"
                  _hover={{ bg: "green.400" }}
                  _active={{ bg: "green.500" }}
                  onClick={() => handleEdit()}
                />
                <IconButton
                  icon={<PiTrashFill />}
                  aria-label="Delete"
                  size="sm"
                  variant="ghost"
                  _hover={{ bg: "red.400" }}
                  _active={{ bg: "red.500" }}
                  onClick={() => handleDelete(selectedMedicine.id)}
                />
              </Flex>
            </Flex>
          </ModalHeader>

          <ModalCloseButton />
          <ModalBody>
            {/* Display five tables here */}
            {/* Table 1: Guidance */}
            <Box mb="4">
              <Text fontWeight="bold" mb="2">
                Guidance
              </Text>
              <Grid
                templateColumns="1fr 1fr 2fr 1fr"
                gap="2"
                alignItems="center"
              >
                <Text>Type</Text>
                <Text>Severity</Text>
                <Text>Description</Text>
                <Button
                  onClick={() => setIsEditModalOpen(true)}
                  size="sm"
                  variant="ghost"
                  _hover={{ bg: "blue.400" }}
                  _active={{ bg: "blue.500" }}
                >
                  <Icon as={PiPencilFill} />
                </Button>
              </Grid>
              {/* Add content for the first table */}
            </Box>
            {/* Table 2 */}
            <Box mb="4">
              <Text fontWeight="bold" mb="2">
                Drug Information
              </Text>
              <Grid
                templateColumns="1fr 1fr 2fr 1fr"
                gap="2"
                alignItems="center"
              >
                <Text>Success</Text>
              </Grid>
            </Box>
            <Box mb="4">
              <Text fontWeight="bold" mb="2">
                Alternative
              </Text>
              <Grid
                templateColumns="1fr 1fr 2fr 1fr"
                gap="2"
                alignItems="center"
              >
                <Text>Name</Text>
                <Text>Description</Text>
                <Text>Unit Price</Text>
                <Button
                  onClick={() => setIsEditModalOpen(true)}
                  size="sm"
                  variant="ghost"
                  _hover={{ bg: "blue.400" }}
                  _active={{ bg: "blue.500" }}
                >
                  <Icon as={PiPencilFill} />
                </Button>
              </Grid>
            </Box>
            {/* Table 4 */}
            <Box mb="4">
              <Text fontWeight="bold" mb="2">
                Least Expensive NDC
              </Text>
              <Grid
                templateColumns="1fr 1fr 2fr 1fr"
                gap="2"
                alignItems="center"
              >
                <Text>Code</Text>
              </Grid>
            </Box>
            {/* Table 5 */}
            <Box mb="4">
              <Text fontWeight="bold" mb="2">
                NDCS Active
              </Text>
              {/* Add content for the fifth table */}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default MedicineTable;
