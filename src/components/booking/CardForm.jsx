import { useRef, useContext, useEffect, useState } from "react";

import { TicketBasketContext } from "../../contexts/TicketBasketContext";

export default function CardForm(props) {
  const formElm = useRef(null);
  const { ticketBasket } = useContext(TicketBasketContext);
  // console.log(ticketBasket);

  // Input mask:
  const [card, setCard] = useState();
  const cardInput = useRef(null);
  const dateInput = useRef(null);
  const codeInput = useRef(null);

  function submitted(e) {
    e.preventDefault();

    props.toggleComponentsArr.setToggleCardForm(false);
    props.toggleComponentsArr.setToggleBasketHeader(true);
    props.toggleComponentsArr.setToggleFlowComplete(true);
    props.setIsCurrent(props.isCurrent + 1);
    props.setPopup(false);

    function fullfillSpot() {
      const reserveSpotId = { id: ticketBasket.reserveSpotId };
      const postFullfillSpot = JSON.stringify(reserveSpotId);
      fetch("https://prototype-masters-foofest.herokuapp.com/fullfill-reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: postFullfillSpot,
      })
        .then((response) => console.log(response))
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
    }

    fullfillSpot();

    const ticketInfo = {
      ticketType: ticketBasket.ticketType,
      ticketAmount: ticketBasket.ticketAmount,
      campingArea: ticketBasket.campingArea,
      tent2PersonAmount: ticketBasket.tent2PersonAmount,
      tent3PersonAmount: ticketBasket.tent3PersonAmount,
      isGreenCamping: ticketBasket.isGreenCamping,
      fullname: ticketBasket.personInfo.fullname,
      email: ticketBasket.personInfo.email,
      phone_number: ticketBasket.personInfo.phone_number,
      zip_code: ticketBasket.personInfo.zip_code,
      street: ticketBasket.personInfo.street,
      city: ticketBasket.personInfo.city,
      country: ticketBasket.personInfo.country,
    };

    function postData(data) {
      const LINK = "https://frontend-54ac.restdb.io/rest/booking-info";
      const APIKEY = "6245613d67937c128d7c9394";

      const postData = JSON.stringify(data);
      fetch(LINK, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "x-apikey": APIKEY,
        },
        body: postData,
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }

    postData(ticketInfo);
  }

  // https://dev.to/juanmanuelcrego/input-mask-in-react-without-libraries-5akf
  const handleCardNumberInput = () => {
    const cardValue = cardInput.current.value.replace(/\D/g, "").match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/);
    cardInput.current.value = !cardValue[2] ? cardValue[1] : `${cardValue[1]}-${cardValue[2]}${`${cardValue[3] ? `-${cardValue[3]}` : ""}`}${`${cardValue[4] ? `-${cardValue[4]}` : ""}`}`;
    const numbers = cardInput.current.value.replace(/(\D)/g, "");
    setCard(numbers);

    if (cardValue[0].length === 16) {
      dateInput.current.focus();
    }
  };

  function handleDateInput() {
    const dateValue = dateInput.current.value;
    // console.log(dateValue.length);
    if (dateValue.length === 5) {
      codeInput.current.focus();
    }
  }

  useEffect(() => {
    handleCardNumberInput();
  }, [card]);

  return (
    <>
      <h2 className="heading">Payment information</h2>
      <form id="card_form" ref={formElm} onSubmit={submitted}>
        <div className="field-container">
          <label htmlFor="name">Name on card</label>
          <input id="name" type="text" required />
        </div>
        <div className="field-container">
          <label htmlFor="cardnumber">Card Number</label>
          <input id="cardnumber" type="text" inputMode="numeric" maxLength="19" required ref={cardInput} onChange={handleCardNumberInput} />
        </div>
        <div className="field-container">
          <label htmlFor="expirationdate">Expiration (mm/yy)</label>
          <input id="expirationdate" type="text" inputMode="numeric" maxLength="5" required ref={dateInput} onChange={handleDateInput} />
        </div>
        <div className="field-container">
          <label htmlFor="securitycode">Security Code</label>
          <input id="securitycode" type="text" pattern="[0-9]+" inputMode="numeric" ref={codeInput} maxLength="3" required />
        </div>
        <div className="booking_flow_nav">
          <button
            className="back_btn shape"
            onClick={() => {
              props.toggleComponentsArr.setToggleCardForm(false);
              props.toggleComponentsArr.setToggleBasketOverview(true);
              props.setIsCurrent(props.isCurrent - 1);
            }}
          >
            Back
          </button>
          <button className="continue_btn shape" type="sumbit">
            Pay
          </button>
        </div>
      </form>
      {/* <div className="booking_flow_nav">
        <button
          className="back_btn shape"
          onClick={() => {
            props.toggleComponentsArr.setToggleCardForm(false);
            props.toggleComponentsArr.setToggleBasketOverview(true);
            props.setIsCurrent(props.isCurrent - 1);
          }}
        >
          Back
        </button>
        <button
          className="continue_btn shape"
          onClick={() => {
            props.toggleComponentsArr.setToggleCardForm(false);
            props.toggleComponentsArr.setToggleBasketHeader(true);
            props.toggleComponentsArr.setToggleFlowComplete(true);
            props.setIsCurrent(props.isCurrent + 1);
            props.setPopup(false);
          }}
        >
          Pay
        </button>
      </div> */}
    </>
  );
}
