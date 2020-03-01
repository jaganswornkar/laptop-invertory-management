import React, { Component } from "react";
import { Card, CardContent, Input, Button } from "@material-ui/core";
import Axios from "axios";

export class Update_image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      image: "",
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
    //   Axios.post("http://13.234.154.77:8001/newImage", { data: this.state })
    Axios.post("http://localhost:8001/newImage", { data: this.state })

        .then(data => {
          console.log("new image uploaded");
          this.setState({ id: "", image: "" });
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
            Update Laptop Image
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
                Image Url:{" "}
                <Input
                  type="text"
                  name="image"
                  placeholder="Image url"
                  value={this.state.image}
                  onChange={e => {
                    this.setState({ image: e.target.value });
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

export default Update_image;
