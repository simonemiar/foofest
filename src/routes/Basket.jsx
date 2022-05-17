// import Header from "./components/Header";

import { useState } from "react";

import TicketDetails from "../components/TicketDetails";
import PersonInfo from "../components/PersonInfo";
import CardForm from "../components/CardForm";
// import Header from "../components/Header";

export default function Basket() {
  const [showPersonInfo, setShowPersonInfo] = useState(false);

  return (
    <main>
      {/* <button onClick={() => showPersonInfo(true)}>Person info</button>

      <button onClick={() => setShowPersonInfo(false)}>Details</button> */}

      {showPersonInfo ? (
        <PersonInfo showPersonInfo={showPersonInfo} setShowPersonInfo={setShowPersonInfo} />
      ) : (
        <TicketDetails showPersonInfo={showPersonInfo} setShowPersonInfo={setShowPersonInfo} />
      )}
      <CardForm />
    </main>
  );
}
