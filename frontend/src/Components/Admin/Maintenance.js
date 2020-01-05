import React, { Component } from "react";
import { Card, CardContent, Input, Button, TextField } from "@material-ui/core";
import Axios from "axios";

export class Maintenance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      date: "",
      status: "",
      owner: "",
      description: "",
      toggle:false
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
    if (this.state.id.length > 0) {
      Axios.post("http://localhost:8001/postMaintenance", { data: this.state })
        .then(data => {
          console.log("maintenance details posted");
          this.setState({
            id: "",
            date: "",
            status: "",
            owner: "",
            description: ""
          });
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
            Assign Maintenance details
          </Button>
          {this.state.toggle ? (
            <div>
              <CardContent>
                Laptop Id :{" "}
                <Input
                  type="int"
                  name="id"
                  value={this.state.id}
                  onChange={e => {
                    this.setState({ id: e.target.value });
                  }}
                />
                <br />
              </CardContent>
              <CardContent>
                Owner name :{" "}
                <Input
                  type="text"
                  name="owner"
                  value={this.state.owner}
                  onChange={e => {
                    this.setState({ owner: e.target.value });
                  }}
                />
              </CardContent>
              <CardContent>
                Assinging date :{" "}
                <Input
                  type="text"
                  name="date"
                  placeholder="dd / mm / yy"
                  value={this.state.date}
                  onChange={e => {
                    this.setState({ date: e.target.value });
                  }}
                />
              </CardContent>
              <CardContent>
                Status :{" "}
                <Input
                  type="text"
                  name="date"
                  placeholder=" damaged / repaired"
                  value={this.state.status}
                  onChange={e => {
                    this.setState({ status: e.target.value });
                  }}
                />
              </CardContent>
              <CardContent>
                Description :{" "}
                <TextField
                  label="add description"
                  multiline
                  rows="3"
                  fullWidth
                  variant="outlined"
                  value={this.state.description}
                  onChange={e => {
                    this.setState({ description: e.target.value });
                  }}
                />
              </CardContent>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                onClick={this.onSubmitHandler}
              >
                Submit
              </Button>{" "}
            </div>
          ) : (
            ""
          )}
        </Card>
      </div>
    );
  }
}

export default Maintenance;
