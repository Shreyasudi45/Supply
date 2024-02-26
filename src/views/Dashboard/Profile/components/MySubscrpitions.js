import React, { useState } from "react";
import {
  Flex,
  Button,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  VStack,
  Heading,
} from "@chakra-ui/react";

function MySubscription() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Selected option:", selectedOption);
  };

  const handleCancel = () => {
    // Handle cancel logic here
    setSelectedOption(""); // Reset selected option
  };

  return (
    <Flex flexDirection="column" alignItems="center" mt="4">
      <Heading as="h1" size="lg" mb="4">
        MY SUBSCRIPTIONS
      </Heading>
      <FormControl>
        <VStack spacing="4">
          <FormLabel>How frequently would you like to receive an email about the Medication Pricing?</FormLabel>
          <RadioGroup onChange={setSelectedOption} value={selectedOption}>
            <VStack spacing="2">
              <Radio value="red">Never</Radio>
              <Radio value="blue">Weekly</Radio>
              <Radio value="green">Bi-Weekly</Radio>
              <Radio value="green">Monthly</Radio>
            </VStack>
          </RadioGroup>
        </VStack>
        <Flex justify="center" mt="4">
          <Button
            colorScheme="teal"
            mr="2"
            onClick={handleSubmit}
            disabled={!selectedOption}
          >
            Submit
          </Button>
          <Button
            colorScheme="gray"
            onClick={handleCancel}
            disabled={!selectedOption}
          >
            Cancel
          </Button>
        </Flex>
      </FormControl>
    </Flex>
  );
}

export default MySubscription;
