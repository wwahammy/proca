import React from "react";
import ReactDOM from "react-dom";
import SignatureForm from "./SignatureForm";
import FABAction from "./FAB.js";
import ShareAction from "./Share.js";

//const querystring = require("querystring");

//console.log(querystring);

let config = {
  data: {},
  margin: "dense",
  variant: "filled",
  selector: "#signature-form"
};

const Share = args => {
  if (args) config = { ...config, ...args };
  if (!document.querySelector(config.selector)) {
    let elem = document.createElement("div");
    elem.id = "signature-form";
    config.selector = "#" + elem.id;
    document.body.appendChild(elem);
  }
  ReactDOM.render(
    <ShareAction {...config} />,
    document.querySelector(config.selector)
  );
}

const Button = args => {
  if (args) config = { ...config, ...args };
  if (!document.querySelector(config.selector)) {
    let elem = document.createElement("div");
    elem.id = "signature-button";
    config.selector = "#" + elem.id;
    document.body.appendChild(elem);
  }
  ReactDOM.render(
    <FABAction {...config} />,
    document.querySelector(config.selector)
  );
};

const Dialog = args => {
  if (args) config = { ...config, ...args };
  if (!document.querySelector(config.selector)) {
    let elem = document.createElement("div");
    elem.id = "signature-buttonaaa";
    config.selector = "#" + elem.id;
    document.body.appendChild(elem);
  }
  ReactDOM.render(
    <FABAction {...config} />,
    document.querySelector(config.selector)
  );
};

const Form = args => {
  
  if (args) config = { ...config, ...args };
  if (!document.querySelector(config.selector)) {
    let elem = document.createElement("div");
    elem.id = "signature-form";
    config.selector = "#" + elem.id;
    document.body.appendChild(elem);
  }

  config.nextAction=function() {
    ReactDOM.render(
      <ShareAction {...config}/>,
      document.querySelector(config.selector)
    );
  }

  ReactDOM.render(
    <SignatureForm {...config}/>,
    document.querySelector(config.selector)
  );
};

export { config, Button, Form, Dialog, Share };

//      <SignatureForm margin= "dense" variant= "filled" />
