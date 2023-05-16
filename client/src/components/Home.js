import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Cards";
import Login from "./ProfileForm/index";


function Home() {
  return (
    <div>
      <Header />
      <Card
        title="Card Title"
        imageUrl="card-image.jpeg"
        body="Card Body"
      />
      <Login />
      <Footer />
    </div>
  )
}

export default Home;
