import React, { useState, useEffect } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Header";
import Footer from "./components/Footer";

import Auth from "./utils/auth";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoggedIn = async () => {
      setIsLoggedIn(await Auth.loggedIn());
    };

    checkLoggedIn();
  }, []);

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Navbar />
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
              />
              <Route
                path="/login"
                element={!isLoggedIn ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/signup"
                element={!isLoggedIn ? <Signup /> : <Navigate to="/" />}
              />
              <Route
                path="/movies/:movieId"
                element={isLoggedIn ? <Movie /> : <Navigate to="/login" />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
