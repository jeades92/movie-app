import React from "react";
// import { ApolloClient, InMemoryCache, ApolloProvider } from 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./components/Home";
import Footer from "./components/Footer";
import Card from "./components/Cards";
import Login from "./components/ProfileForm/index";


function App() {
  return (
    <div>
      <Home />
      <Login />
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
