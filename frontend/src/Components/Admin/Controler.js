import React, { Component } from "react";
import {
  Card,
  CardContent,
  Input,
  Checkbox,
  Button,
  TextField
} from "@material-ui/core";
import Axios from "axios";

export class Controler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: "",
      ram: "",
      rom: "",
      color: "",
      mac: "",
      ip: "",
      battery: false,
      active: false,
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
    if (this.state.name.length > 0 && this.state.image.length > 0) {
      Axios.post("http://13.234.154.77:8001/laptop_details", { data: this.state })
        .then(data => {
          console.log(data.data);
          this.setState({
            name: "",
            image: "",
            ram: "",
            rom: "",
            color: "",
            mac: "",
            ip: "",
            battery: false,
            active: false,
            description: ""
          });
        })
        .catch(err => console.log(err));
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
            Post New laptop details
          </Button>
          {this.state.toggle ? (
            <div>
              <CardContent>
                Laptop Name :{" "}
                <Input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={e => {
                    this.setState({ name: e.target.value });
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
                Image URL :{" "}
                <Input
                  type="text"
                  name="image"
                  value={this.state.image}
                  onChange={e => {
                    this.setState({ image: e.target.value });
                  }}
                />
              </CardContent>
              <CardContent>
                RAM :{" "}
                <Input
                  type="text"
                  name="ram"
                  value={this.state.ram}
                  onChange={e => {
                    this.setState({ ram: e.target.value });
                  }}
                />
                {"  "}
                ROM :{" "}
                <Input
                  type="text"
                  name="rom"
                  value={this.state.rom}
                  onChange={e => {
                    this.setState({ rom: e.target.value });
                  }}
                />
              </CardContent>
              <CardContent>
                Color :{" "}
                <Input
                  type="text"
                  name="color"
                  value={this.state.color}
                  onChange={e => {
                    this.setState({ color: e.target.value });
                  }}
                />
              </CardContent>
              <CardContent>
                Mac Address :{" "}
                <Input
                  type="text"
                  name="mac"
                  placeholder="xx:xx:xx:xx:xx:xx"
                  value={this.state.mac}
                  onChange={e => {
                    this.setState({ mac: e.target.value });
                  }}
                />
              </CardContent>
              <CardContent>
                IP Address :{" "}
                <Input
                  type="text"
                  name="ip"
                  placeholder="xxx.xxx.x.xx"
                  value={this.state.ip}
                  onChange={e => {
                    this.setState({ ip: e.target.value });
                  }}
                />
              </CardContent>
              <CardContent>
                Battery :{" "}
                <Checkbox
                  name="battery"
                  checked={this.state.battery}
                  onChange={e => {
                    this.setState({ battery: e.target.checked });
                  }}
                />
                Active :{" "}
                <Checkbox
                  name="battery"
                  checked={this.state.active}
                  onChange={e => {
                    this.setState({ active: e.target.checked });
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

export default Controler;
