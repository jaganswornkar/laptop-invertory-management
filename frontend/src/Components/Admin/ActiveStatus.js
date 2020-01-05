import React, { Component } from "react";
import { Card, CardContent, Input, Button, Checkbox } from "@material-ui/core";
import Axios from "axios";

export class ActiveStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      active: false,
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
      Axios.post("http://13.234.154.77:8001/updateActiveStatus", {
        data: this.state
      })
        .then(data => {
          // console.log("active status updated ");
          this.setState({ id: "", active: false });
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
            Update laptop Active status
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
                Active status :{" "}
                <Checkbox
                  name="active"
                  checked={this.state.active}
                  onChange={e => {
                    this.setState({ active: e.target.checked });
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

export default ActiveStatus;
