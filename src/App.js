import React from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Screen/Home"
import Login from "./Components/Screen/Login"
import Signup from "./Components/Screen/Sigin_Page"
import Profile from "./Components/Screen/Profile"

function App() {
  return (
    <>



      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>

          <Route path="login" element={<Login />} />

          <Route path="signup" element={<Signup />} />
          <Route path="profile" element={<Profile />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
