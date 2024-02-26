import { Flex, Image} from "@chakra-ui/react";
import blob from "assets/img/blob.jpg";
import tablets from "assets/img/tablets.jpg";
import React from "react";
import Problem from "./components/Problem";
import Problem2 from "./components/Problem2";
function Billing() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Problem
      backgroundImage={blob}
        
        
      />
      
      <Problem2
      image={
          <Image
            src={tablets}
            alt='tablets image'
            minWidth={{ md: "10px" }}
          />
        }
        title={"Costs of medications continue to rise and are out of control. Things are getting worse."}
        description={"Medicines account for 30-50% of a company’s or government’s total spend on health care."}
        additionalDescription={"Costs hinder an individual from complying and adhering with their medical regimens and optimal health cannot be realized."}
        additional1Description={"Innovation and solutions are needed to lessen the spend on medications and health care, in general."}
  />
        
  
    </Flex>
  );
}

export default Billing;
