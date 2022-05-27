import React from "react";
import logo from "./../../assets/Images/logo.svg";
import reactLogo from "./../../assets/Images/react.svg";
import classes from "./Header.module.css";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div>
          <img className={classes.logo} src={logo} alt="Logo" />
        </div>
        <div className="textRight">
          <img className={classes.teactLogo} src={reactLogo} alt="React Logo" />
          <strong>React</strong>
        </div>
      </div>
    </header>
  );
};
