import React, { Component } from "react";
import { Card, CardContent, Input, Button } from "@material-ui/core";
import Axios from "axios";

export class UserAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      toggle: false
    };
  }

  onClickHandler = () => {
    if (this.state.toggle) {
      this.setState({ toggle: false });
    } else {
      this.setState({ toggle: true });
    }
  };

  onSubmitHandler = () => {
    if (this.state.email.length > 0) {
      Axios.post("http://13.234.154.77:8001/newAdmin", { data: this.state })
        .then(data => {
          // console.log("new Admin posted");
          this.setState({ email: "" });
        })
        .catch(err => console.error(err));
    } else {
      window.alert("fill the details first");
    }
  };

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
        <Card style={{ background: "lightgreen", width: 580 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={this.onClickHandler}
          >
            Add new Admin / Update Admin
          </Button>
          {this.state.toggle ? (
            <div>
              <CardContent>
                Email ID :{" "}
                <Input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={e => {
                    this.setState({ email: e.target.value });
                  }}
                />
                <br />
              </CardContent>

              <Button
                variant="contained"
                color="secondary"
                fullWidth
                onClick={this.onSubmitHandler}
              >
                Submit
              </Button>
            </div>
          ) : (
            ""
          )}
        </Card>
      </div>
    );
  }
}

export default UserAdmin;
