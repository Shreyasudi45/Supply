import { Flex, Grid, useColorModeValue } from "@chakra-ui/react";
import avatar4 from "assets/img/avatars/avatar4.png";
import ProfileBgImage from "assets/img/ProfileBackground.png";
import React from "react";
import { PiPencilFill } from "react-icons/pi";
import { PiBagFill } from "react-icons/pi";
import { PiCalendarCheckFill } from "react-icons/pi";
import Header from "./components/Header";
import ProfileInformation from "./components/ProfileInformation";
import { Link, useHistory } from "react-router-dom"; // Import Link and useHistory

function Profile() {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );

  const history = useHistory(); // Initialize useHistory hook

  const handleEditProfileClick = () => {
    history.push("/editprofile"); // Navigate to "/editprofile" path
  };

  return (
    <Flex direction="column">
      <Header
        backgroundHeader={ProfileBgImage}
        backgroundProfile={bgProfile}
        avatarImage={avatar4}
        name={"Jahnavi Nadgir"}
        email={"janvi@gmail.com"}
        tabs={[
          {
            name: "EDIT PROFILE",
            icon: <PiPencilFill />,
            onClick: handleEditProfileClick, // Handle click event for Edit Profile tab
          },
          {
            name: "MEDICINE CABINET",
            icon: <PiBagFill />,
          },
          {
            name: "MY SUBSCRIPTIONS",
            icon: <PiCalendarCheckFill />,
          },
        ]}
      />
      <Grid templateColumns={{ sm: "1fr", xl: "repeat(3, 1fr)" }} gap="22px">
        <ProfileInformation
          title={"Profile Information"}
          name={"Jahnavi Nadgir"}
          mobile={"(44) 123 1234 123"}
          email={"janvi@gmail.com"}
          location={"India"}
        />
      </Grid>
    </Flex>
  );
}

export default Profile;
