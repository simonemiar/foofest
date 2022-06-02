import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/Navbar/NavBar";
import Home from "./components/Navbar/routes/Home";
import Schedule from "./components/Navbar/routes/Schedule";
import Tickets from "./components/Navbar/routes/Tickets";
import Basket from "./components/Navbar/routes/Basket";

import "./scss/style.scss";

import { TicketBasketProvider } from "./contexts/TicketBasketContext";

function App() {
  return (
    <div className="App">
      <TicketBasketProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            {/* <Route path="/schedule/:id" element={<BandDetails />} /> */}
            <Route path="/basket" element={<Basket />} />
            <Route path="/tickets" element={<Tickets />} />
          </Routes>
        </BrowserRouter>
      </TicketBasketProvider>
    </div>
  );
}

export default App;
