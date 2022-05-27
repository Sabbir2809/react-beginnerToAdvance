import React, { Component } from "react";
import { Builder } from "../../Components/Builder/Builder";
import { IceCream } from "../../Components/IceCream/IceCream";
import classes from "./IceCreamBuilder.module.css";

export default class IceCreamBuilder extends Component {
  state = {
    items: {},
    scoops: [],
    totalPrice: 0,
  };

  render() {
    return (
      <div className={["container", classes.container].join(" ")}>
        <IceCream />
        <Builder />
      </div>
    );
  }
}
