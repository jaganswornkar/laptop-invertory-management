import React from "react";
import Header from "./Header";
export default function About() {
  return (
    <div style={{ textAlign: "center" ,marginTop:'50px'}}>
      <Header
        headerText="all details about this laptop"
        link="/home"
        text2="Home"
      />
      <img
        src="https://navgurukul.org/assets/img/logo.png"
        alt="Navgurukul"
        height="100%"
      />
      <p>This Application is for management of Navgurukul Laptops</p>
      <hr />
      <h2>How to use it:</h2>
      <div>
        <ul style={{ textAlign: "left", width: "600px", margin: "0 auto" }}>
          <li>Every one can see only the page / App and get the details.</li>
          <li>
            Only Admins can make change and they can also change the admin.
          </li>
        </ul>
      </div>
    </div>
  );
}
