// import Header from "./components/Header";

import { useState } from "react";

import TicketDetails from "../components/TicketDetails";
import PersonInfo from "../components/PersonInfo";
import CardForm from "../components/CardForm";
import Timer from "../components/Timer";
// import Header from "../components/Header";

export default function Basket() {
  // Timer
  // Sourcecode :
  // https://gist.github.com/another-coder4life/fb169771a45014a458e354bfa4e7e1b9

  const endTime = new Date().getTime() + 60000 * 0.4; // 2 minutes
  const [timeLeft, setEndTime] = Timer(endTime);

  const minutes = Math.floor(timeLeft / 60000) % 60;
  const seconds = Math.floor(timeLeft / 1000) % 60;

  const [showPersonInfo, setShowPersonInfo] = useState(false);

  return (
    <main>
      {/* <button onClick={() => showPersonInfo(true)}>Person info</button>

      <button onClick={() => setShowPersonInfo(false)}>Details</button> */}

      <div className="timer_container">
        <h3>Time left: {`${minutes}:${seconds}`}</h3>
      </div>

      {showPersonInfo ? <PersonInfo showPersonInfo={showPersonInfo} setShowPersonInfo={setShowPersonInfo} /> : <TicketDetails showPersonInfo={showPersonInfo} setShowPersonInfo={setShowPersonInfo} />}
      <CardForm />
    </main>
  );
}
