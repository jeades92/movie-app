import React from "react";
// First we import Greeting from the components folder
import Home from "./components/Home";
import Footer from "./components/Footer";
// Our App component returns the Greeting component
function App() {
  return (
    <div>
      <Home />
      <Footer /> 
    </div>
  );
}

export default App;
