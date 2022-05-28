import React, { Component } from "react";
import { Builder } from "../../Components/Builder/Builder";
import { IceCream } from "../../Components/IceCream/IceCream";
import classes from "./IceCreamBuilder.module.css";

export default class IceCreamBuilder extends Component {
  state = {
    items: {
      vanilla: 45,
      chocolate: 50,
      lemon: 55,
      orange: 40,
      strawberry: 60,
    },
    scoops: [],
    totalPrice: 0,
  };

  render() {
    const { items } = this.state;
    return (
      <div className={["container", classes.container].join(" ")}>
        <IceCream scoops={scoops} />
        <Builder items={items} />
      </div>
    );
  }
}
