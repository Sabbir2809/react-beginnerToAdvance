import React from "react";
import classes from "./IceCream.module.css";
import { Scoop } from "./Scoop/Scoop";

export const IceCream = ({ scoops }) => {
  const flavors = Object.keys(scoops);

  return (
    <div>
      <div className={classes.icecream}>
        <p className={classes.cone} />
        {/* <p>Please start adding scoops</p> */}
        {scoops.map((scoop) => (
          <Scoop scoop={scoop} key={`${scoop}${Math.random()}`} />
        ))}

        <div className={classes.cherry} />
      </div>
    </div>
  );
};
