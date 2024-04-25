import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import RTLLayout from "layouts/RTL.js";
import SignUp from "views/Auth/SignUp.js";
import SignIn from "views/Auth/SignIn.js";
import BuiltByDevelopers from "views/Dashboard/BuiltByDevelopers.js";
import ActiveUsers from "views/Dashboard/ActiveUsers.js";
import Modify from "views/Dashboard/Modify.js";
import AddMoreDetails from "views/Dashboard/AddMoreDetails.js";
import UserList from "views/Dashboard/UserList.js";
import PatientScreeningRoster from "views/Dashboard/PatientScreeningRoster.js";
import LoadPatientData from "views/Dashboard/LoadPatientData.js";
import PatientProfile from "views/Dashboard/PatientProfile.js";
ReactDOM.render(
  <HashRouter>
    <ChakraProvider>
  <Switch>
    <Route path="/signup" component={SignUp} />
    <Route exact path="/signin" component={SignIn} />
    <Route exact path="/builtbydevelopers" component={BuiltByDevelopers} />
    <Route path="/activeusers" component={ActiveUsers} />
    <Route path="/modify" component={Modify} />
    <Route path="/addmoredetails" component={AddMoreDetails} /> 
    <Route path="/userlist" component={UserList} />
    <Route path="/patientscreeningroster" component={PatientScreeningRoster} />
    <Route path="/patientprofile" component={PatientProfile} />
    <Route path="/loadpatientdata" component={LoadPatientData} />
    <Route path="/auth" component={AuthLayout} />
    <Route path="/admin" component={AdminLayout} />
    <Route path="/rtl" component={RTLLayout} />
    <Redirect from="/" to="/signup" />
  </Switch>
  </ChakraProvider>
</HashRouter>,
  document.getElementById("root")
);
