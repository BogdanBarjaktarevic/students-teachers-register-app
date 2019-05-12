import ReactDOM from "react-dom";

import logos from "../../assets/images/logotipi beli.png";
import "./Footer.css";

import React, { Component } from "react";

class Footer extends Component {
  componentDidMount() {
    const footer = document.querySelector(".footer");
    const classes = ["mt-auto", "py-3", "text-center"];
    footer.classList.add(...classes);
  }

  componentWillUnmount() {
    const footer = document.querySelector(".footer");
    const classes = ["mt-auto", "py-3", "text-center"];
    footer.classList.remove(...classes);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="container">
        <img src={logos} alt="Klett Logos Freska" className="img-fluid" />
      </div>,
      document.querySelector(".footer")
    );
  }
}

export default Footer;