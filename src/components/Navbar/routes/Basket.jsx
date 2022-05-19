import { useState } from "react";

import TicketDetails from "../../TicketDetails";
import PersonInfo from "../../PersonInfo";
import CardForm from "../../CardForm";
import BasketOverview from "../../BasketOverview";
import FlowComplete from "../../FlowComplete";
import Timer from "../../Timer";
// import Header from "../components/Header";
import ProgressBar from "../../ProgressBar";

export default function Basket() {
  const [ToggleTicketDetails, setToggleTicketDetails] = useState(true);
  const [TogglePersonInfo, setTogglePersonInfo] = useState(false);
  const [ToggleBasketOverview, setToggleBasketOverview] = useState(false);
  const [ToggleCardForm, setToggleCardForm] = useState(false);
  const [ToggleFlowComplete, setToggleFlowComplete] = useState(false);
  const [isCurrent, setIsCurrent] = useState(1);

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
      <Timer />
      <ProgressBar isCurrent={isCurrent} setIsCurrent={setIsCurrent} />
      {ToggleTicketDetails ? <TicketDetails isCurrent={isCurrent} setIsCurrent={setIsCurrent} toggleComponentsArr={toggleComponentsArr} /> : null}
      {TogglePersonInfo ? <PersonInfo isCurrent={isCurrent} setIsCurrent={setIsCurrent} toggleComponentsArr={toggleComponentsArr} /> : null}
      {ToggleBasketOverview ? <BasketOverview isCurrent={isCurrent} setIsCurrent={setIsCurrent} toggleComponentsArr={toggleComponentsArr} /> : null}
      {ToggleCardForm ? <CardForm isCurrent={isCurrent} setIsCurrent={setIsCurrent} toggleComponentsArr={toggleComponentsArr} /> : null}
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

      {/* {showPersonInfo ? <PersonInfo showPersonInfo={showPersonInfo} setShowPersonInfo={setShowPersonInfo} /> : <TicketDetails showPersonInfo={showPersonInfo} setShowPersonInfo={setShowPersonInfo} />}
      <CardForm /> */}
    </main>
  );
}
