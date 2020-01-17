import React, { Component } from "react";
import { connect } from "react-redux";
import { files } from "../actions";
import Axios from "axios";
import { Card, Typography, List } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Header from "./Header";
import './description.css'

export class Description extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
      maintenance: [],
      owners: []
    };
  }

  componentDidMount() {
    const laptopId = this.props.match.params.id;

    // get method to get laptop files
    Axios.get(`http://13.234.154.77:8001/laptopDescription/${laptopId}`)
      .then(data => {
        // console.log("laptop files : ", data.data);
        this.setState({ files: data.data });
      })
      .catch(err => console.error(err));

    // get method to get maintenance details
    Axios.get(`http://13.234.154.77:8001/getMaintenance/${laptopId}`)
      .then(data => {
        // console.log("maintenance : ", data.data);
        this.setState({ maintenance: data.data });
      })
      .catch(err => console.error(err));

    // get method to get owners details
    Axios.get(`http://13.234.154.77:8001/getOwners/${laptopId}`)
      .then(data => {
        // console.log("owners : ", data.data);
        this.setState({ owners: data.data });
      })
      .catch(err => console.error(err));
  }

  render() {
    // condition / function for mentainence detail
    if (this.state.maintenance.length > 0) {
      var maintenance = this.state.maintenance.map((e, i) => {
        return (
          <div>
            <div key={i} style={{ display: "flex" }}>
              <div style={{ margin: 20 }}>
                <Typography align="left">Owner : {e.owner}</Typography>
                <Typography align="left">Date : {e.date}</Typography>
                <Typography align="left">Status : {e.status}</Typography>
              </div>
              <div style={{ margin: 20 }}>
                <Divider orientation="vertical" />
              </div>
              <div style={{ paddingTop: 16 }}>
                <Typography title="description">{e.description}</Typography>
              </div>
            </div>
            <Divider />
          </div>
        );
      });
    }
    // conditon / function for owner
    if (this.state.owners.length > 0) {
      var owners = this.state.owners.map((e, i) => {
        return (
          <div>
            <div key={i} style={{ display: "flex" }}>
              <div style={{ margin: 20 }}>
                <Typography align="left">Assigning date : {e.date}</Typography>
                <Typography align="left">Owner : {e.owner_name}</Typography>
              </div>
            </div>
            <Divider />
          </div>
        );
      });
    }
    // conditon / method for image and details
    const file = this.state.files[0];
    if (this.state.files.length > 0) {
      return (
        <div>
          <Header
            headerText="all details about this laptop"
            link="/"
            text2="back to app"
          />
          <Card className="main_card" >
            {file.active ? (
              <Typography
                align="right"
                style={{
                  background: "green",
                  color: "white",
                  paddingRight: 20
                }}
                title="active"
              >
                <b>Id : {file.id}</b>
              </Typography>
            ) : (
              <Typography
                align="right"
                style={{ background: "red", color: "white", paddingRight: 20 }}
                title="deactivated"
              >
                <b>Id : {file.id}</b>
              </Typography>
            )}
            <div className="desc_div" >
              <div>
                <List style={{ margin: 10 }}>
                  <a
                    href={file.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ cursor: "default" }}
                  >
                    <img
                      src={file.image}
                      alt="Img"
                      width="340px"
                      height="300px"
                    />
                  </a>
                  <Typography
                    style={{
                      background: "red",
                      color: "white",
                      fontSize: "20px",
                      textTransform: "capitalize",
                      borderRadius: 5
                    }}
                    align="center"
                  >
                    <b>{file.name}</b>
                  </Typography>
                </List>
              </div>
              <div>
                <Divider orientation="vertical" />
              </div>
              <div style={{ margin: 30, textTransform: "capitalize" }}>
                <Typography>Laptop ID : {file.id}</Typography>
                <Typography>Owner : {file.owner}</Typography>
                <Typography>RAM : {file.ram}</Typography>
                <Typography>ROM : {file.rom}</Typography>
                <Typography>Charger : {file.battery ? "Yes" : "No"}</Typography>
                <Typography>Color : {file.color}</Typography>
                <Typography>
                  Status : {file.active ? "Active" : "Deactivated"}
                </Typography>
                <Typography>
                  IP Address : {file.ip || "---.---.-.--"}
                </Typography>
                <Typography>
                  Mac Address : {file.mac || "--:--:--:--:--:--"}
                </Typography>
              </div>
            </div>
          </Card>
          <Typography
            title="laptop description"
            align="center"
            style={{ background: "grey", color: "white" }}
          >
            <b style={{ fontSize: 25 }}>Description</b>
            <Card style={{ minHeight: 200, padding: 20 }}>
              {file.description}
            </Card>
          </Typography>
          <Typography
            title="laptop maintenance details"
            align="center"
            style={{ background: "grey", color: "white" }}
          >
            <b style={{ fontSize: 25 }}> Laptop maintenance details</b>
            <Card style={{ minHeight: 200, padding: 20 }}>
              {maintenance || "Everything is fine :)"}
            </Card>
          </Typography>
          <Typography
            title="laptop owners details"
            align="center"
            style={{ background: "grey", color: "white" }}
          >
            <b style={{ fontSize: 25 }}> Laptop owners details</b>
            <Card style={{ minHeight: 200, padding: 20 }}>
              {owners || "laptop owner details"}
            </Card>
          </Typography>
        </div>
      );
    }
    return <div>No laptop available</div>;
  }
}

const mapStateToProps = state => {
  return {
    files: state.files
  };
};

const mapDispatchToProps = dispatch => {
  return {
    files: (t, f) => dispatch(files(t, f))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Description);
