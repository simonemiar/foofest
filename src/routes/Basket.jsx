import { useState, useContext } from "react";

import TicketDetails from "../components/TicketDetails";
import PersonInfo from "../components/PersonInfo";
import CardForm from "../components/CardForm";
import BasketOverview from "../components/BasketOverview";
import FlowComplete from "../components/FlowComplete";

import { TicketBasketContext } from "../contexts/TicketBasketContext";

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

  const { ticketBasket } = useContext(TicketBasketContext);
  // const [totalPrice, setTotalPrice] = useState(0);

  return (
    <main>
      {ToggleTicketDetails ? <TicketDetails toggleComponentsArr={toggleComponentsArr} /> : null}
      {TogglePersonInfo ? <PersonInfo toggleComponentsArr={toggleComponentsArr} /> : null}
      {ToggleBasketOverview ? <BasketOverview toggleComponentsArr={toggleComponentsArr} /> : null}
      {ToggleCardForm ? <CardForm toggleComponentsArr={toggleComponentsArr} /> : null}
      {ToggleFlowComplete ? <FlowComplete toggleComponentsArr={toggleComponentsArr} /> : null}

      <h1>{ticketBasket}</h1>
      {/* <article className="total_bar">
        <p>Total ({totalItems} items)</p>
        <p className="total_price">{totalPrice} kr.</p>
      </article> */}
    </main>
  );
}
