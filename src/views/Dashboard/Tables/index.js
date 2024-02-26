// Chakra imports
import { Flex, Image} from "@chakra-ui/react";
import about from "assets/img/about.jpg";
import mobile from "assets/img/mobile.jpg";
import Offer from "assets/img/Offer.png";
import Offer2 from "assets/img/Offer2.png";
import lightImage from "assets/img/light.jpg";
import doctorlab from "assets/img/doctorlab.jpg";
import laptopImage from "assets/img/laptop.jpg";
import React from "react";
import Authors from "./components/Authors";
import Projects from "./components/Projects";
import Offers from "./components/Offers";
import ActiveUsers from "../Dashboard/components/ActiveUsers";
import About from "./components/About";
import { tablesTableData, dashboardTableData } from "variables/general";
import { light } from "@material-ui/core/styles/createPalette";

function Tables() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Authors
      backgroundImage={about}
        //title={"ABOUT US"}
        
      />
      <Projects
        title={"How Milligram Works"}
        name={"We use the best search feature and capability to find the lowest and best prices for your medications."}
        description={"Milligram was created as a web-based medication price transparency engine. Our software helps patients and providers find medication at the lowest price in any given zip code. Our translations support English, Spanish, Tagalog and Chinese. With our three data partners, Milligram searches prices of medications nationwide at 65,000+ pharmacies, offering the lowest prices on the internet.Milligram can analyze in detail prescription claims data of self-insured entities, like companies and governments, and see the margins that insurance companies, pharmacy benefit managers and pharmacies exact upon us. Milligram can then provide a road map showing many ways for employers and/or employees to save money on their medication spend. Milligram is not an insurance company or a Pharmacy Benefit Manager (PBM), whose incentive are to make not save money, but can help work alongside and in parallel with these entities. Milligram advocates for employer and employee. It does the work and to search for and identify opportunities. Milligram also has a smartphone app that can notify and “push” information to employees linking them to significant savings."}
        image={
          <Image
            src={mobile}
            alt='mobile image'
            minWidth={{ md: "10px" }}
          />
        }
  />
  <ActiveUsers
        backgroundImage={doctorlab}
          image={
            <Image
              src={laptopImage}
              alt='laptop image'
              minWidth={{ md: "50px" }}
            />
          }
        />
        <Offers
        title={"What Milligram Offers"}
        name={"Milligram can address both the employee experience and/or population management."}
        image={
          <>
          <Image
            src={Offer}
            alt='Offer Image'
            minWidth={{ md: "40px" }}
          />
          <Image
            src={Offer2}
            alt='Offer2 Image'
            minWidth={{ md: "40px" }}
          />
          </>
        }
  />
  <About
      backgroundImage={lightImage}
      />
    </Flex>
  );
}

export default Tables;
