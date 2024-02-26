import React, { useState } from "react";
import {
  Flex,
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from "@chakra-ui/react";
import signInImage from "assets/img/signInImage.png";

function EditProfile() {
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.400", "white");
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    password: "",
  });

  const onClose = () => {
    setIsOpen(false);
    // Clear error messages when closing modal
    setErrors({
      firstName: "",
      lastName: "",
      mobileNumber: "",
      password: "",
    });
  };
  const onOpen = () => setIsOpen(true);

  const handleSubmit = () => {
    // Perform form validation
    const { firstName, lastName, mobileNumber, password } = errors;
    if (firstName || lastName || mobileNumber || password) {
      // If any error message is present, prevent form submission
      return;
    }

    // If no errors, proceed with form submission
    // For now, just close the modal
    onClose();
  };

  // Validation function to check if the field is empty
  const validateField = (name, value) => {
    if (value.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "This field is required",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  return (
    <Flex position="relative" mb="40px">
      <Flex
        h={{ sm: "initial", md: "75vh", lg: "85vh" }}
        w="100%"
        maxW="1044px"
        mx="auto"
        justifyContent="space-between"
        mb="30px"
        pt={{ sm: "100px", md: "0px" }}
      >
        <Flex
          alignItems="center"
          justifyContent="start"
          style={{ userSelect: "none" }}
          w={{ base: "100%", md: "50%", lg: "42%" }}
        >
          <Flex
            direction="column"
            w="100%"
            background="transparent"
            p="48px"
            mt={{ md: "150px", lg: "80px" }}
          >
            <FormControl>
              <FormLabel color={titleColor} fontSize="32px" mb="10px">
                Edit Profile
              </FormLabel>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                First Name
              </FormLabel>
              <Input
                borderRadius="15px"
                mb="24px"
                fontSize="sm"
                type="text"
                placeholder="Enter your first name"
                size="lg"
                onChange={(e) => validateField("firstName", e.target.value)}
              />
              {errors.firstName && (
                <Box fontSize="sm" color="red.500">
                  {errors.firstName}
                </Box>
              )}
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Last Name
              </FormLabel>
              <Input
                borderRadius="15px"
                mb="24px"
                fontSize="sm"
                type="text"
                placeholder="Enter your last name"
                size="lg"
                onChange={(e) => validateField("lastName", e.target.value)}
              />
              {errors.lastName && (
                <Box fontSize="sm" color="red.500">
                  {errors.lastName}
                </Box>
              )}
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Mobile Number
              </FormLabel>
              <Input
                borderRadius="15px"
                mb="24px"
                fontSize="sm"
                type="tel"
                placeholder="Enter your mobile number"
                size="lg"
                onChange={(e) => validateField("mobileNumber", e.target.value)}
              />
              {errors.mobileNumber && (
                <Box fontSize="sm" color="red.500">
                  {errors.mobileNumber}
                </Box>
              )}
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Password
              </FormLabel>
              <Input
                borderRadius="15px"
                mb="36px"
                fontSize="sm"
                type="password"
                placeholder="Enter your password"
                size="lg"
                onChange={(e) => validateField("password", e.target.value)}
              />
              {errors.password && (
                <Box fontSize="sm" color="red.500">
                  {errors.password}
                </Box>
              )}
              <Button
                fontSize="10px"
                type="submit"
                bg="teal.300"
                w="100%"
                h="45"
                mb="20px"
                color="white"
                mt="20px"
                _hover={{
                  bg: "teal.200",
                }}
                _active={{
                  bg: "teal.400",
                }}
                onClick={onOpen}
              >
                Save Changes
              </Button>
            </FormControl>
          </Flex>
        </Flex>
        <Box
          display={{ base: "none", md: "block" }}
          overflowX="hidden"
          h="100%"
          w="40vw"
          position="absolute"
          right="0px"
        >
          <Box
            bgImage={signInImage}
            w="100%"
            h="100%"
            bgSize="cover"
            bgPosition="50%"
            position="absolute"
            borderBottomLeftRadius="20px"
          ></Box>
        </Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Changes</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Enter your confirmation message and input fields */}
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
              <FormLabel mt={4}>Current Password</FormLabel>
              <Input type="password" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={handleSubmit}>
              Confirm
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default EditProfile;
