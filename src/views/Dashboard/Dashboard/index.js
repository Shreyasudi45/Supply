import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// assets
import doctorlab from "assets/img/doctorlab.jpg";
import searchIcon from "assets/img/searchIcon.png";
import laptopImage from "assets/img/laptop.jpg";
import LineChart from "components/Charts/LineChart";

// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import React from "react";
import { dashboardTableData, timelineData } from "variables/general";
import ActiveUsers from "./components/ActiveUsers";
import BuiltByDevelopers from "./components/BuiltByDevelopers";
import MiniStatistics from "./components/MiniStatistics";
import OrdersOverview from "./components/OrdersOverview";
import Projects from "./components/Projects";
import SalesOverview from "./components/SalesOverview";
import WorkWithTheRockets from "./components/WorkWithTheRockets";


export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");
  //const imageText = "Text below the image"; 
  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      {/*<SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'>
        <MiniStatistics
          title={"Today's Moneys"}
          amount={"$53,000"}
          percentage={55}
          icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Today's Users"}
          amount={"2,300"}
          percentage={5}
          icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"New Clients"}
          amount={"+3,020"}
          percentage={-14}
          icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <Min  iStatistics
          title={"Total Sales"}
          amount={"$173,000"}
          percentage={8}
          icon={<CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
  </SimpleGrid>*/}
    {/*<Grid
        templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my='26px'
gap='24px'>*/}
        <BuiltByDevelopers
          title={"What is Milligram?"}
          name={"We use the best search feature and capability to find the lowest and best prices for your medications."}
          description={"Milligram is a powerful analytic software that can help save money on prescription drugs for self-insured entities, like companies and governments, and for employees, i.e. individuals, as well. Milligram can analyze in detail prescription claims data of self-insured entities, like companies and governments, and see the margins that insurance companies, pharmacy benefit managers and pharmacies exact upon us."}
          
          
          //imageText="Text below the image"
        />
      {/*</Grid>*/}
      {/*<Grid
        templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
        templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
        gap='24px'
        mb={{ lg: "26px" }}>*/}
        <ActiveUsers
        backgroundImage={doctorlab}
        //title={" Milligram Features & Benefits "}
          image={
            <Image
              src={laptopImage}
              alt='laptop image'
              minWidth={{ md: "50px" }}
            />
          }
        />
        {/*<SalesOverview
          title={"Sales"}
          percentage={5}
          chart={<LineChart />}
        />*/}
      {/*</Grid>*/}
      <Grid
        templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
        templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
        gap='24px'>
        <SalesOverview
          title={"Working Together"}
          description={"Milligram has formed a partnership with other innovative pharmaceutical companies. As a team, we commit to our goal of healthier patients whether it be through strategies for patient compliance or offering prescriptions at lower costs."}
      />
        {/*<OrdersOverview
          title={"Orders Overview"}
          amount={30}
          data={timelineData}
      />*/}
      </Grid>
    </Flex>
  );
}