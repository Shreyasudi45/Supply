import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import EditProfile from "views/Dashboard/Profile/components/EditProfile";
import AuthLayout from "layouts/Auth.js";
import { ChakraProvider } from '@chakra-ui/react';
import AdminLayout from "layouts/Admin.js";
import RTLLayout from "layouts/RTL.js";
import MySubscription from "views/Dashboard/Profile/components/MySubscrpitions";
import MedicineTable from "views/Dashboard/Profile/components/MedicineCabinet";

ReactDOM.render(
  <HashRouter>
    <ChakraProvider>
  <Switch>
  <Route path="/mysubscription" component={MySubscription} />
    <Route path="/medicinetable" component={MedicineTable} />
    <Route path="/editprofile" component={EditProfile} />
    <Route path="/auth" component={AuthLayout} />
    <Route path="/admin" component={AdminLayout} />
    <Route path="/rtl" component={RTLLayout} />
    <Redirect from="/" to="/admin/dashboard" />
  </Switch>
  </ChakraProvider>
</HashRouter>,
  document.getElementById("root")
);
