import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export class Error extends Component {
  render() {
    return (
      <>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="https://harmonytest.com/content/dam/rochesequence/worldwide/global/404.png"
            alt="404"
            width="70%"
            height="20%"
          />
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Button style={{ background: "red", color: "white" }}>
              <b>Click Here For Home Page</b>
            </Button>
          </Link>
        </div>
      </>
    );
  }
} 

export default Error;