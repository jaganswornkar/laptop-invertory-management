import React from "react";
import { GoogleLogin } from "react-google-login";
import { reactLocalStorage } from "reactjs-localstorage";
import Axios from "axios";
import { Redirect } from "react-router";
import Header from "./Header";

export default function Signin() {
  const responseGoogle = response => {
    const email = response.profileObj.email;
    console.log(email);
    Axios.post("http://13.234.154.77:8001/signin", { email: email })
      .then(data => {
        console.log(data.data);
        if (
          data.data !== undefined ||
          data !== undefined ||
          data !== "err" ||
          data.data !== "err"
        ) {
          reactLocalStorage.set("token", data.data);
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
    <div>
      <Header headerText="Only admins can login" link="/" text2="back to app" />
      <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
        <GoogleLogin
          clientId="967857975367-jub8m2slcbggvqhp6hbepaodsadavsoc.apps.googleusercontent.com"         // ngapp.ml
          // clientId="708025200012-3tqtvlbso9v1a19ehenektuanvoattun.apps.googleusercontent.com"      // localhost
          buttonText=" Login with Google "
          theme="dark"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>
    </div>
  );
}
