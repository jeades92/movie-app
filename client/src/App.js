import React from "react";
// First we import Greeting from the components folder
import Home from "./components/Home";
import Footer from "./components/Footer";
import Card from "./components/Cards"
// Our App component returns the Greeting component
function App() {
  return (
    <div>
      <Home />
      <Card 
      title="Card Title"
      imageUrl="card-image.jpeg"
      body="Card Body"
      />
      <Footer /> 
    </div>
  );
}

export default App;
