import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Card, List, Typography, Divider } from "@material-ui/core";
import Axios from "axios";
import { connect } from "react-redux";
import { files } from "../actions";

export class Laptop_list extends Component {
  constructor(props) {
    super(props);
    this.state = {
      List: [],
      cloneList:[],
      laptopId: ""
    };
  }

  componentDidMount() {
    Axios.get("http://13.234.154.77:8001/getList")
      .then(data => {
        this.setState({ List: data.data, cloneList:data.data });
        this.props.files("GET_FILES", data.data);
      })
      .catch(err => console.error(err));
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.filterClick) {
      let filteredData = this.state.cloneList.filter(
        e => e.active === parseInt(nextProps.filterClick)
      );
      this.setState({List:filteredData})
    }else{
      this.setState({List:this.state.cloneList})
    }
  }

  onClickHandler = id => {
    // console.log('laptopId : ',id)
    this.setState({ laptopId: id });
  };

  render() {
    const images = this.state.List.map((e, i) => {
      return (
        <Card
          key={i}
          style={{ margin: 30 }}
          onClick={id => {
            this.onClickHandler(e.id);
          }}
        >
          {e.active ? (
            <Typography
              align="right"
              style={{ background: "green", paddingRight: 20, color: "white" }}
              title="active"
            >
              <b>Id : {e.id}</b>
            </Typography>
          ) : (
            <Typography
              align="right"
              style={{ background: "red", paddingRight: 20, color: "white" }}
              title="deactivated"
            >
              <b>Id : {e.id}</b>
            </Typography>
          )}
          <List
            key={i}
            style={{ margin: 10 }}
            title="Click here to open details"
          >
            <a
              href={e.url}
              rel="noopener noreferrer"
              target="_blank"
              style={{ cursor: "default" }}
            >
              <img src={e.image} alt="Img" width="340px" height="300px" />
            </a>
            <Divider />
            <Typography align="left">Model : {e.name}</Typography>
            <Typography align="left">Owner : {e.owner}</Typography>
            <Typography align="left">
              Charger : {e.battery ? "Yes" : "No"}
            </Typography>
          </List>
        </Card>
      );
    });
    if (this.state.laptopId) {
      return <Redirect to={`/${this.state.laptopId}`} />;
    }
    return (
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {images}
      </div>
    );
  }
}

// redux dispatch function to add data in store
const mapDispatchToProps = dispatch => {
  return {
    files: (t, f) => dispatch(files(t, f))
  };
};

export default connect(null, mapDispatchToProps)(Laptop_list);

// export default Laptop_list;
