import React from "react";
import Button from "../Button/Button";
import Search from "../Search/Search";
import "./Home.css";

function Home({ description }) {
  return (
    <section>
      <img src="./Images/google_logo.png" alt="Google.com" />
      <Search />
      <Button />
      <p>{description}</p>
    </section>
  );
}

export default Home;
