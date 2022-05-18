import { useState } from "react";

import TicketDetails from "../components/TicketDetails";
import PersonInfo from "../components/PersonInfo";
import CardForm from "../components/CardForm";
import BasketOverview from "../components/BasketOverview";
import FlowComplete from "../components/FlowComplete";
import Timer from "../components/Timer";
// import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";

export default function Basket() {
  const [ToggleTicketDetails, setToggleTicketDetails] = useState(true);
  const [TogglePersonInfo, setTogglePersonInfo] = useState(false);
  const [ToggleBasketOverview, setToggleBasketOverview] = useState(false);
  const [ToggleCardForm, setToggleCardForm] = useState(false);
  const [ToggleFlowComplete, setToggleFlowComplete] = useState(false);

  const toggleComponentsArr = {
    ToggleTicketDetails: ToggleTicketDetails,
    setToggleTicketDetails: setToggleTicketDetails,
    TogglePersonInfo: TogglePersonInfo,
    setTogglePersonInfo: setTogglePersonInfo,
    ToggleBasketOverview: ToggleBasketOverview,
    setToggleBasketOverview: setToggleBasketOverview,
    ToggleCardForm: ToggleCardForm,
    setToggleCardForm: setToggleCardForm,
    ToggleFlowComplete: ToggleFlowComplete,
    setToggleFlowComplete: setToggleFlowComplete,
  };
  return (
    <main>
      <ProgressBar />
      {ToggleTicketDetails ? <TicketDetails toggleComponentsArr={toggleComponentsArr} /> : null}
      {TogglePersonInfo ? <PersonInfo toggleComponentsArr={toggleComponentsArr} /> : null}
      {ToggleBasketOverview ? <BasketOverview toggleComponentsArr={toggleComponentsArr} /> : null}
      {ToggleCardForm ? <CardForm toggleComponentsArr={toggleComponentsArr} /> : null}
      {ToggleFlowComplete ? <FlowComplete toggleComponentsArr={toggleComponentsArr} /> : null}

      {/* {TogglePersonInfo ? <TicketDetails /> : <PersonInfo />} */}

      {/* <button onClick={() => TogglePersonInfo(true)}>Person info</button>

      <button onClick={() => setTogglePersonInfo(false)}>Details</button> */}

      {/* <BasketOverview />

      {TogglePersonInfo ? (
        <PersonInfo TogglePersonInfo={TogglePersonInfo} setTogglePersonInfo={setTogglePersonInfo} />
      ) : (
        <TicketDetails TogglePersonInfo={TogglePersonInfo} setTogglePersonInfo={setTogglePersonInfo} />
      )}
      <CardForm /> */}
      <Timer />

      {/* {showPersonInfo ? <PersonInfo showPersonInfo={showPersonInfo} setShowPersonInfo={setShowPersonInfo} /> : <TicketDetails showPersonInfo={showPersonInfo} setShowPersonInfo={setShowPersonInfo} />}
      <CardForm /> */}
    </main>
  );
}
