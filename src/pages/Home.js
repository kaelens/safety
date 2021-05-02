import React, { Component } from "react";
import Download from "../assets/home-bgd/Download-icon.svg";
import Device from "../assets/home-bgd/Cardiogram-icon.svg";
import Notification from "../assets/home-bgd/Notification-icon.svg";
import "../styles/Home.scss";

class Home extends Component {
  componentDidMount() {
    document.body.style.background =
      "#1c3384 url('../images/home-blob.svg') no-repeat";
    document.body.style.backgroundSize = "contain";
  }

  componentWillUnmount() {
    document.body.style.background = "#1c3384";
  }

  render() {
    const Columns = () => (
      <div
        class="col"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: 20,
        }}
      >
        <div class="download">
          <img src={Download} />
          <p>
            Download the excel template and fill out according to your inventory
          </p>
        </div>
        <div class="device">
          <img src={Device} />
          <p>
            Upload your form to our website and we will monitor your updates
          </p>
        </div>
        <div class="notification">
          <img src={Notification} />
          <p>
            Get real time updates and never worry about your medical devices
            safety again!
          </p>
        </div>
      </div>
    );

    return (
      <div id="home">
        <h1>
          Discover <span>safer</span> medical devices.
        </h1>
        <Columns />
      </div>
    );
  }
}

export default Home;
