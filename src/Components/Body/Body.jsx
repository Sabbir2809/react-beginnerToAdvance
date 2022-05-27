import React from "react";
import IceCreamBuilder from "../../Containers/IceCreamBuilder/IceCreamBuilder";
import classes from "./Body.module.css";

export const Body = () => {
  return (
    <div className={classes.mainBody}>
      <IceCreamBuilder />
    </div>
  );
};
