import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Home from "./routes/Home";
import Schedule from "./routes/Schedule";
import Basket from "./routes/Basket";
import Tickets from "./routes/Tickets";

import { TicketBasketProvider } from "./contexts/TicketBasketContext";

import "./scss/style.scss";

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
      console.log("bandsdata:", bandsData);

      const resSchedule = await fetch("https://prototype-masters-foofest.herokuapp.com/schedule");
      const scheduleData = await resSchedule.json();
      setSchedule(scheduleData);
      console.log("scheduleData:", scheduleData);

      const resEvents = await fetch("https://prototype-masters-foofest.herokuapp.com/events");
      const eventsData = await resEvents.json();
      setEvents(eventsData);
      console.log("eventsData:", eventsData);
    }
    get();
  }, []);

  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/">Home</Link> | <Link to="/schedule">Schedule</Link> |{" "}
          <Link to="/tickets">Tickets</Link>
        </nav>
      </header>
      <TicketBasketProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/tickets" element={<Tickets />} />
        </Routes>
        <Header />
      </TicketBasketProvider>
    </div>
  );
}

export default App;
