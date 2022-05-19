import "./scss/style.scss";
import { Link } from "react-router-dom";

// simone test
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
  const [bands, setBands] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [events, setEvents] = useState([]);

  // Fetching bands, schedule and events data:
  useEffect(() => {
    async function get() {
      const resBands = await fetch("https://prototype-masters-foofest.herokuapp.com/bands");
      const bandsData = await resBands.json();
      setBands(bandsData);
      // console.log("bandsdata:", bandsData);

      const resSchedule = await fetch("https://prototype-masters-foofest.herokuapp.com/schedule");
      const scheduleData = await resSchedule.json();
      setSchedule(scheduleData);
      // console.log("scheduleData:", scheduleData);

      const resEvents = await fetch("https://prototype-masters-foofest.herokuapp.com/events");
      const eventsData = await resEvents.json();
      setEvents(eventsData);
      // console.log("eventsData:", eventsData);
    }
    get();
  }, []);

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
