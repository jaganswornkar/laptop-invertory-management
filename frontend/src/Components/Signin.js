import React from "react";
import { GoogleLogin } from "react-google-login";
import { reactLocalStorage } from "reactjs-localstorage";
import Axios from "axios";
import { Redirect } from "react-router";
import Header from "./Header";
import Admin from "./Admin/Admin";

export default function Signin() {
  const responseGoogle = response => {
    // console.log(response)
    const token = response.tokenObj.id_token;
    // console.log(token)
    Axios.post("http://13.234.154.77:8001/verifyToken", { token: token })
      .then(data => {
        if (
          data.data === undefined ||
          data === undefined ||
          data === "err" ||
          data.data === "err"
        ) {
          // console.log("login successful");
          reactLocalStorage.set("token", token);
          window.location.reload();
        } else {
          reactLocalStorage.clear("token", "");
          window.alert("This email has no access of Controler");
        }
      })
      .catch(err => console.error(err));
  };
  if (reactLocalStorage.get("token")) {
    const token = reactLocalStorage.get("token");
    Axios.post("http://13.234.154.77:8001/verifyToken", { token: token })
      .then(data => {
        if (
          data.data === undefined ||
          data === undefined ||
          data === "err" ||
          data.data === "err"
        ) {
          reactLocalStorage.clear("token", "");
          console.log("wrong credentials", token);
        } else {
          console.log("Login successfull");
          return <Redirect to={"/Admin"} />;
        }
      })
      .catch(err => {
        console.log("err", err);
      });
  }
  return (
    <div>
      <Header headerText="Only admins can login" link="/" text2="back to app" />
      <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
        <GoogleLogin
          clientId="967857975367-jub8m2slcbggvqhp6hbepaodsadavsoc.apps.googleusercontent.com"
          buttonText=" Login with Google "
          theme="dark"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>
    </div>
  );
}
