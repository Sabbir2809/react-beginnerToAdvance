import React from "react";
import "./App.css";
import { Body } from "./Components/Body/Body";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Layout } from "./Components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Header />
      <Body />
      <Footer />
    </Layout>
  );
}

export default App;
