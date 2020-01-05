import React from "react";
import { GoogleLogin } from "react-google-login";
import { reactLocalStorage } from "reactjs-localstorage";
import Axios from "axios";
import { Redirect } from "react-router";

export default function Signin() {
  const responseGoogle = response => {
    const token = response.tokenObj.id_token;
    Axios.post("http://localhost:8001/verifyToken", { token: token })
      .then(data => {
        if (data.data !== "err") {
          console.log("login successful");
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
    return <Redirect to={"/Admin"} />;
  }
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
      <GoogleLogin
        clientId="472110929846-gquf8q2s18kj6k0ahk6l1a4pmcc7ir51.apps.googleusercontent.com"
        buttonText=" Login with Google "
        theme="dark"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  );
}
