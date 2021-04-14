import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.scss";

class Nav extends Component {
  renderLinks = () => {
    const links = [
      { title: "Form", path: "/Form" },
      { title: "Contact", path: "/Contact" },
      { title: "About", path: "/About" },
      { title: "Home", path: "/" },
    ];
    return links.map((item, index) => (
      <Link key={index} to={item.path}>
        <div class="nav-links">
          <p>{item.title}</p>
        </div>
      </Link>
    ));
  };

  // renderForm = () => {
  //     const form = [
        
  //     ]
  //   return form.map((item, index) => (
  //       <Link key={index} to={item.path}>
  //         <div class="form-link">
  //           <p>{item.title}</p>
  //         </div>
  //       </Link>
  //     ));
  //   };

  render() {
    return (
      <div id="nav">
        <h1>Project name</h1>
        {this.renderLinks()}
        {/* {this.renderForm()} */}
      </div>
    );
  }
}

export default Nav;
