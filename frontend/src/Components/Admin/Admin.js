import React, { Component } from "react";
import Controler from "./Controler";
import Owner from "./Owner";
import Maintenance from "./Maintenance";
import ActiveStatus from "./ActiveStatus";
import BatteryStatus from "./BatteryStatus";
import Description from "./Description";
import { Redirect } from "react-router-dom";

import { reactLocalStorage } from "reactjs-localstorage";
import UpdateIP from "./UpdateIP";
import UpdateMac from "./UpdateMac";
import Axios from "axios";
import UserAdmin from "./UserAdmin";
import GetAdmin from "./GetAdmin";
import RemoveAdmin from "./RemoveAdmin";
import Header from "../Header";
import { Button, LinearProgress } from "@material-ui/core";

export class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: false
    };
  }

  componentDidMount() {
    const token = reactLocalStorage.get("token");
    Axios.get("http://13.234.154.77:8001/checkToken", { params: { token: token } })
      .then(data => {
        console.log("data.data :", data.data);
        if (data.data === false || data.data === "err") {
          console.log("wrong credentials");
          window.alert(' wrong credentials :( \n or This user do not has access to Admin page :(')
          reactLocalStorage.clear('token','')
          window.location = "http://13.234.154.77:3000/signin";
        } else {
          console.log("login successfull");
          this.setState({ token: true });
        }
      })
      .catch(err => {
        console.log("error in verifying token in admin page :", err);
      });
  }

  logout = () => {
    console.log("logiout");
    reactLocalStorage.clear("token", "");
    window.location.reload();
  };

  render() {
    if (this.state.token) {
      return (
        <div>
          <Header
            headerText="Welcome to ng laptop inventoy app Admin page"
            link="/"
            text2="back to app"
          />
          <Button
            style={{ background: "red", margin: "10px", color: "white" }}
            onClick={this.logout}
          >
            logout
          </Button>
          <ActiveStatus />
          <BatteryStatus />
          <Description />
          <UpdateIP />
          <UpdateMac />
          <Owner />
          <Maintenance />
          <Controler />
          <GetAdmin />
          <UserAdmin />
          <RemoveAdmin />
        </div>
      );
    } else {
      // return <Redirect to={"/signin"} />;
      return (<><LinearProgress color="secondary" />
      </>)
    }
  }
}

export default Admin;
