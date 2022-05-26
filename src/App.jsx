import { useState } from "react";
import Footer from "./Components/layout/Footer";
import Header from "./Components/layout/Header";
import Home from "./Components/pages/Home/Home";
// import './global.css'

function App() {
  // const state = false;
  const state = useState(false);

  if (state[0] === false) {
    return (
      <div>
        <h1>Login Page</h1>
        <input type="text" />
        <br />
        <br />
        <input type="password" />
        <br />
        <br />
        <button
          onClick={() => {
            console.log("Clicked...", state[0]);
            state[1](true);
          }}
        >
          Login
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <Home description={"Google offered in: "} lang={" বাংলা"} />
        <Footer />
      </div>
    );
  }
}

export default App;
