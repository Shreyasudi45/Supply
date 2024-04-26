import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link as ChakraLink,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// Assets
import signInImage from "assets/img/signInImage.png";

function SignIn() {
   
  const titleColor = useColorModeValue("#60beeb", "#60beeb");
  const textColor = useColorModeValue("gray.400", "white");
  const history = useHistory();
  const [email, setEmail] = useState("jahnavi.n@dynpro.in");
  const [password, setPassword] = useState("Janvi@123");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://hcaapi.kairosrp.com/api/login", { email, password }); 
      console.log("Login successful:", response.data);
      history.push("/builtbydevelopers");
    } catch (error) {
      console.error("Login failed:", error);
      // Handle error response (e.g., display error message to the user)
    }
  };
  const rememberMe = true;
  return (
    <Flex position='relative' mb='40px'>
      <Flex
        h={{ sm: "initial", md: "75vh", lg: "85vh" }}
        w='100%'
        maxW='1044px'
        mx='auto'
        justifyContent='space-between'
        mb='30px'
        pt={{ sm: "100px", md: "0px" }}
      >
        <Flex
          alignItems='center'
          justifyContent='start'
          style={{ userSelect: "none" }}
          w={{ base: "100%", md: "50%", lg: "42%" }}
        >
          <Flex
            direction='column'
            w='100%'
            background='transparent'
            p='48px'
            mt={{ md: "150px", lg: "80px" }}
          >
            <Heading color={"#60beeb"} fontSize='32px' mb='10px'>
              Welcome Back
            </Heading>
            <Text mb='36px' ms='4px' color={textColor} fontWeight='bold' fontSize='14px'>
              Enter your email and password to sign in
            </Text>
            <FormControl>
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Email
              </FormLabel>
              <Input
                borderRadius='15px'
                mb='24px'
                fontSize='sm'
                type='text'
                placeholder='Your email address'
                size='lg'
                name="email"
                value={email}
                onChange={handleInputChange}
              />
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Password
              </FormLabel>
              <Input
                borderRadius='15px'
                mb='36px'
                fontSize='sm'
                type='password'
                placeholder='Your password'
                size='lg'
                name="password"
                value={password}
                onChange={handleInputChange}
              />
              
              <Flex alignItems='center' justifyContent='space-between'>
                <FormControl display='flex' alignItems='center'>
                  <Switch id='remember-login' colorScheme='blue' me='10px' isChecked={rememberMe}/>
                  <FormLabel htmlFor='remember-login' mb='0' ms='1' fontWeight='normal' >
                    Remember me
                  </FormLabel>
                </FormControl>
                <Link color='#60beeb' fontSize='sm'>
                  Forgot Password?
                </Link>
              </Flex>
              <Button
                fontSize='20px'
                type='submit'
                bg='#60beeb'
                w='100%'
                h='45'
                mb='20px'
                color='white'
                mt='20px'
                _hover={{
                  bg: "#60beeb",
                }}
                _active={{
                  bg: "#60beeb",
                }}
                onClick={handleFormSubmit}
              >
                SIGN IN
              </Button>
            </FormControl>
            <Flex flexDirection='column' justifyContent='center' alignItems='center' maxW='100%' mt='0px'>
              <Text color="black" fontWeight='medium'>
                Don't have an account ?{" "}
                <Link to="/signup"color={titleColor} as='span' ms='5px' fontWeight='bold'>
                  Sign Up
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          display={{ base: "none", md: "block" }}
          overflowX='hidden'
          h='100%'
          w='40vw'
          position='absolute'
          right='0px'
        >
        </Box>
      </Flex>
    </Flex>
  );
}

export default SignIn;
