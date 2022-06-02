import { useState } from "react";

import TicketDetails from "../../booking/TicketDetails";
import PersonInfo from "../../booking/PersonInfo";
import CardForm from "../../booking/CardForm";
import BasketOverview from "../../booking/BasketOverview";
import FlowComplete from "../../booking/FlowComplete";
import Timer from "../../booking/Timer";
import ProgressBar from "../../booking/ProgressBar";

export default function Basket() {
  // Here are we creating a lot of states so we can hide and show the different steps
  const [toggleTicketDetails, setToggleTicketDetails] = useState(true);
  const [togglePersonInfo, setTogglePersonInfo] = useState(false);
  const [toggleBasketOverview, setToggleBasketOverview] = useState(false);
  const [toggleCardForm, setToggleCardForm] = useState(false);
  const [toggleFlowComplete, setToggleFlowComplete] = useState(false);
  const [toggleBasketHeader, setToggleBasketHeader] = useState(true);
  // This state is used to show the progress bar
  const [isCurrent, setIsCurrent] = useState(1);
  const [popup, setPopup] = useState(false);

  // Here are we creating a object so we easily access the different states
  const toggleComponentsArr = {
    toggleTicketDetails: toggleTicketDetails,
    setToggleTicketDetails: setToggleTicketDetails,
    togglePersonInfo: togglePersonInfo,
    setTogglePersonInfo: setTogglePersonInfo,
    toggleBasketOverview: toggleBasketOverview,
    setToggleBasketOverview: setToggleBasketOverview,
    toggleCardForm: toggleCardForm,
    setToggleCardForm: setToggleCardForm,
    toggleFlowComplete: toggleFlowComplete,
    setToggleFlowComplete: setToggleFlowComplete,
    toggleBasketHeader: toggleBasketHeader,
    setToggleBasketHeader: setToggleBasketHeader,
  };
  return (
    <main>
      {toggleBasketHeader ? (
        <section className="basket_header">
          <Timer toggleComponentsArr={toggleComponentsArr} popup={popup} setPopup={setPopup} />
          <ProgressBar isCurrent={isCurrent} setIsCurrent={setIsCurrent} />
        </section>
      ) : null}

      {/* Here are we checking if the toogleTicketDetails if true, and if it´s then we are shown a step
      in the booking flow. And we are doing that for each step until we get to flow complete */}
      {toggleTicketDetails ? (
        <TicketDetails
          isCurrent={isCurrent}
          setIsCurrent={setIsCurrent}
          toggleComponentsArr={toggleComponentsArr}
        />
      ) : null}
      {togglePersonInfo ? (
        <PersonInfo
          isCurrent={isCurrent}
          setIsCurrent={setIsCurrent}
          toggleComponentsArr={toggleComponentsArr}
        />
      ) : null}
      {toggleBasketOverview ? (
        <BasketOverview
          isCurrent={isCurrent}
          setIsCurrent={setIsCurrent}
          toggleComponentsArr={toggleComponentsArr}
        />
      ) : null}
      {toggleCardForm ? (
        <CardForm
          setPopup={setPopup}
          isCurrent={isCurrent}
          setIsCurrent={setIsCurrent}
          toggleComponentsArr={toggleComponentsArr}
        />
      ) : null}
      {toggleFlowComplete ? <FlowComplete toggleComponentsArr={toggleComponentsArr} /> : null}
    </main>
  );
}
