import React, { Component } from "react";
import { Card, CardContent, Button, List } from "@material-ui/core";
import Axios from "axios";

export class GetAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      admin: [{ email: "jagannath18@navgurukul.org" }],
      toggle: false
    };
  }

  onClickHandler = e => {
    if (this.state.toggle) {
      this.setState({ toggle: false });
    } else {
      this.setState({ toggle: true });
    }
    Axios.get("http://localhost:8001/getAdmin")
      .then(data => {
        this.setState({ admin: data.data });
      })
      .catch(err => console.error(err));
  };

  render() {
    const adminList = this.state.admin.map((e, i) => {
      return <List key={i}>{e.email}</List>;
    });
    return (
      <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
        <Card style={{ background: "lightgreen", width: 580 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={this.onClickHandler}
          >
            Click here to see all admins
          </Button>
          {this.state.toggle ? <CardContent>{adminList}</CardContent> : ""}
        </Card>
      </div>
    );
  }
}

export default GetAdmin;
