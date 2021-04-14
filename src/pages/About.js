import React, { Component } from "react";
import Med from "../assets/about-bgd/medicine-icon.svg";
import "../styles/About.scss";

class About extends Component {
  render() {
    const instructions = [
      {
        message:
          "1. Fill out the provided json files with the registered devices.",
      },
      { message: "2. Submit the sheet" },
      { message: "3. You're all set!" },
    ];
    return (
      <div id="About">
        <h1>About</h1>
        <br />
        <div class="desc">
          <p>
            Our product notifies hospitals, <i> yes y'all</i>, when their
            devices' sBOMs -
            <i>a snazzy term for "Software Bill of Materials" </i>- are not up
            to date / if there has been a recall on their devices. If there has
            been a recall, the second part of our product is a software
            hospitals can purchase that puts up a barrier/firewall between the
            recalled device and the rest of the network to hide the device from
            the network and prevent vulnerabilities.
            <br />
            <br />
            Leave the messy stuff to us. You'll be notified via our alert
            system, email, or notification system if any devices need to be
            updated.
          </p>
        </div>

        <div class="instruction">
          <img src={Med} />
          <h3>
            <b>Instructions of Use:</b>
          </h3>
          {instructions.map((list) => (
            <p>{list.message}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default About;
