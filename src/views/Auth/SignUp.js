// Chakra imports
import React, {useState} from "react";
import { Link, useHistory} from "react-router-dom";
import axios from "axios";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link as ChakraLink,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
// Assets
import bluebg from "assets/img/bluebg.jpg";


function SignUp() {
  const { colorMode } = useColorMode                                                                                         ();
  const titleColor = colorMode === 'light' ? "#60beeb" : "#000000";
  const textColor =colorMode === 'light' ? "gray.700" : "#ffffff";
  const bgColor = colorMode === 'light' ? "white" : "#2d3748";
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const response = await axios.post("https://hcaapi.kairosrp.com/api/register", formData);
      
      console.log("Registration successful:", response.data);
      history.push("/signin");
    } catch (error) {
      
      console.error("Registration failed:", error);
    }
  };
  const rememberMe = true;
  const history = useHistory();
  return (
    <Flex
      direction='column'
      alignSelf='center'
      justifySelf='center'
      overflow='hidden'>
      <Box
        position='absolute'
        minH={{ base: "70vh", md: "50vh" }}
        w={{ md: "calc(100vw - 50px)" }}
        borderRadius={{ md: "15px" }}
        left='0'
        right='0'
        bgRepeat='no-repeat'
        overflow='hidden'
        zIndex='-1'
        top='0'
        bgImage={bluebg}
        bgSize='cover'
        mx={{ md: "auto" }}
        mt={{ md: "14px" }}></Box>
      <Flex
        direction='column'
        textAlign='center'
        justifyContent='center'
        align='center'
        mt='6.5rem'
        mb='30px'>
        <Text fontSize='6xl' color='white' fontWeight='bold'>
          Welcome!
        </Text>
      </Flex>
      <Flex alignItems='center' justifyContent='center' mb='60px' mt='20px'>
        <Flex
          direction='column'
          w='445px'
          background='transparent'
          borderRadius='15px'
          p='40px'
          mx={{ base: "100px" }}
          bg={bgColor}
          boxShadow='0 20px 27px 0 rgb(0 0 0 / 5%)'>
          <Text
            fontSize='xl'
            color={textColor}
            fontWeight='bold'
            textAlign='center'
            mb='22px'>
            Register 
          </Text>
          <FormControl>
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Name
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='text'
              placeholder='Your full name'
              mb='24px'
              size='lg'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
            />
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Email
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='email'
              placeholder='Your email address'
              mb='24px'
              size='lg'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
            />
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Password
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='password'
              placeholder='Your password'
              mb='24px'
              size='lg'
              name='password'
              value={formData.password}
              onChange={handleInputChange}
            />
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Confirm Password
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='password'
              placeholder='Confirm password'
              mb='24px'
              size='lg'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            <FormControl display='flex' alignItems='center' mb='24px' >
              <Switch id='remember-login' colorScheme='blue' me='10px' isChecked={rememberMe} />
              <FormLabel htmlFor='remember-login' mb='0' fontWeight='normal'>
                Remember me
              </FormLabel>
            </FormControl>
            <Button
              type='submit'
              bg='#60beeb'
              fontSize='17px'
              color='white'
              fontWeight='bold'
              w='100%'
              h='45'
              mb='24px'
              onClick={handleFormSubmit}
              _hover={{
                bg: "#60beeb",
              }}
              _active={{
                bg: "#60beeb",
              }}>
              SIGN UP
            </Button>
          </FormControl>
          <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            maxW='100%'
            mt='0px'>
            <Text color={textColor} fontWeight='medium'>
              Already have an account ?{" "}
             <Link 
                to="/signin"
                color={titleColor}
                as='span'
                ms='5px'
                fontWeight='bold'>
                Login
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignUp;
