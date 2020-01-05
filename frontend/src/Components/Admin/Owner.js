import React, { Component } from "react";
import { Card, CardContent, Input, Button } from "@material-ui/core";
import Axios from "axios";

export class Owner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      owner: "",
      date: "",
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
      Axios.post("http://localhost:8001/newOwner", { data: this.state })
        .then(data => {
          console.log("new owner posted");
          this.setState({ id: "", owner: "", date: "" });
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
            Assign New Owners
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

export default Owner;
