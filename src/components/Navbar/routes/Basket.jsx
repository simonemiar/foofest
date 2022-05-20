import { useState } from "react";

import TicketDetails from "../../booking/TicketDetails";
import PersonInfo from "../../booking/PersonInfo";
import CardForm from "../../booking/CardForm";
import BasketOverview from "../../booking/BasketOverview";
import FlowComplete from "../../booking/FlowComplete";
import Timer from "../../booking/Timer";
import ProgressBar from "../../booking/ProgressBar";

export default function Basket() {
  const [ToggleTicketDetails, setToggleTicketDetails] = useState(true);
  const [TogglePersonInfo, setTogglePersonInfo] = useState(false);
  const [ToggleBasketOverview, setToggleBasketOverview] = useState(false);
  const [ToggleCardForm, setToggleCardForm] = useState(false);
  const [ToggleFlowComplete, setToggleFlowComplete] = useState(false);
  const [toggleBasketHeader, setToggleBasketHeader] = useState(false);
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
    toggleBasketHeader: toggleBasketHeader,
    setToggleBasketHeader: setToggleBasketHeader,
  };
  return (
    <main>
      { toggleBasketHeader ? null :(
     <><Timer />
      <ProgressBar isCurrent={isCurrent} setIsCurrent={setIsCurrent}/>
      </>) }  
       {ToggleTicketDetails ? (
        <TicketDetails
          isCurrent={isCurrent}
          setIsCurrent={setIsCurrent}
          toggleComponentsArr={toggleComponentsArr}
        />
      ) : null}
      {TogglePersonInfo ? (
        <PersonInfo
          isCurrent={isCurrent}
          setIsCurrent={setIsCurrent}
          toggleComponentsArr={toggleComponentsArr}
        />
      ) : null}
      {ToggleBasketOverview ? (
        <BasketOverview
          isCurrent={isCurrent}
          setIsCurrent={setIsCurrent}
          toggleComponentsArr={toggleComponentsArr}
        />
      ) : null}
      {ToggleCardForm ? (
        <CardForm
          isCurrent={isCurrent}
          setIsCurrent={setIsCurrent}
          toggleComponentsArr={toggleComponentsArr}
        />
      ) : null}
      {ToggleFlowComplete ? <FlowComplete toggleComponentsArr={toggleComponentsArr} /> : null}
    </main>
  );
}
