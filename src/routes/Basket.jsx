import { useState, useContext } from "react";

import TicketDetails from "../components/TicketDetails";
import PersonInfo from "../components/PersonInfo";
import CardForm from "../components/CardForm";
import BasketOverview from "../components/BasketOverview";
import FlowComplete from "../components/FlowComplete";

import { TicketBasketContext } from "../contexts/TicketBasketContext";

// import { useState, useContext } from "react";
// import { TicketBasketContext } from "../contexts/TicketBasketContext";
// const { ticketBasket, setTicketBasket } = useContext(TicketBasketContext);

export default function Basket() {
  const { ticketBasket } = useContext(TicketBasketContext);

  // console.log(ticketBasket);

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
      {ToggleTicketDetails ? <TicketDetails toggleComponentsArr={toggleComponentsArr} /> : null}
      {TogglePersonInfo ? <PersonInfo toggleComponentsArr={toggleComponentsArr} /> : null}
      {ToggleBasketOverview ? <BasketOverview toggleComponentsArr={toggleComponentsArr} /> : null}
      {ToggleCardForm ? <CardForm toggleComponentsArr={toggleComponentsArr} /> : null}
      {ToggleFlowComplete ? <FlowComplete toggleComponentsArr={toggleComponentsArr} /> : null}

      <h1>Basket: {ticketBasket ? "empty" : ticketBasket}</h1>
    </main>
  );
}
