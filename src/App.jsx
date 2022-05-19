import "./scss/style.scss";
import { Link } from "react-router-dom";

import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Navbar/routes/Home";
import Schedule from "./components/Navbar/routes/Schedule";
import Tickets from "./components/Navbar/routes/Tickets";
import Basket from "./components/Navbar/routes/Basket";
import { TicketBasketProvider } from "./contexts/TicketBasketContext";
//
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <TicketBasketProvider>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/tickets" element={<Tickets />} />
        </Routes>
      </TicketBasketProvider>
    </div>
  );
}

export default App;
