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

export class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: false
    };
  }
  UNSAFE_componentWillMount() {
    const token = reactLocalStorage.get("token");
    if (token !== undefined) {
      this.setState({ token: true });
    }
  }
  componentDidMount() {
    const token = reactLocalStorage.get("token");
    Axios.post("http://localhost:8001/checkToken", { token: token })
      .then(data => {
        if (data.data === undefined) {
          reactLocalStorage.clear("token", "");
          this.setState({ token: false });
        }
      })
      .catch(err => {
        reactLocalStorage.clear("token", "");
        this.setState({ token: false });
        console.log(err);
      });
  }

  render() {
    if (this.state.token) {
      return (
        <div>
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
      return <Redirect to={"/signin"} />;
    }
  }
}

export default Admin;
