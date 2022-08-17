import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/Navbar/NavBar";
import Home from "./components/Navbar/routes/Home";
import Schedule from "./components/Navbar/routes/Schedule";
import Tickets from "./components/Navbar/routes/Tickets";
import Basket from "./components/Navbar/routes/Basket";
import SingleBand from "./components/schedule/SingleBand";

import "./scss/style.scss";

import { TicketBasketProvider } from "./contexts/TicketBasketContext";
import { BandDataProvider } from "./contexts/BandDataContext";
import { ScheduleProvider } from "./contexts/ScheduleContext";

function App() {
  return (
    <div className="App">
      <TicketBasketProvider>
        <ScheduleProvider>
          <BandDataProvider>
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/artist" element={<SingleBand />}>
                  <Route path=":artistid" element={<SingleBand />} />
                </Route>
                <Route path="/basket" element={<Basket />} />
                <Route path="/tickets" element={<Tickets />} />
              </Routes>
            </BrowserRouter>
          </BandDataProvider>
        </ScheduleProvider>
      </TicketBasketProvider>
    </div>
  );
}

export default App;
