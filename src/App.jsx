import "./scss/style.scss";
import Header from "./components/Header";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import Schedule from "./routes/Schedule";
import Basket from "./routes/Basket";

import { useState, useEffect } from "react";
// import Header from "./components/Header";
import CampingArea from "./components/CampingArea";
import TicketCart from "./components/TicketCart";

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
          <Link to="/">Home</Link> | <Link to="/schedule">Schedule</Link> | <Link to="/basket">Basket</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      <Header />

      <p>Johnny</p>
      <div className="shape">
        <p>hellow, shape</p>
      </div>
      {/* <Header />
      <p>Johnny</p> */}

      <CampingArea />
      {/* <Header />
      <p>Johnny</p> */}
      <TicketCart />
    </div>
  );
}

export default App;
