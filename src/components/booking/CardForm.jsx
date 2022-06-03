import { useRef, useContext, useEffect, useState } from "react";

import { TicketBasketContext } from "../../contexts/TicketBasketContext";

export default function CardForm(props) {
  const formElm = useRef(null);
  const { ticketBasket } = useContext(TicketBasketContext);

  // Input mask:
  const [card, setCard] = useState();
  const cardInput = useRef(null);
  const dateInput = useRef(null);
  const codeInput = useRef(null);

  function submitted(e) {
    e.preventDefault();

    props.toggleComponentsArr.setToggleCardForm(false);
    props.toggleComponentsArr.setToggleBasketHeader(false);
    props.toggleComponentsArr.setToggleFlowComplete(true);
    props.setIsCurrent(props.isCurrent + 1);
    props.setPopup(false);

    // Here are we taking the reserveSpotId and fullfilling spot.
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

    // Here we creating an new object with the data from the ticketBasket
    const ticketInfo = {
      ticketType: ticketBasket.ticketType,
      ticketAmount: ticketBasket.ticketAmount,
      campingArea: ticketBasket.campingArea,
      tent2PersonAmount: ticketBasket.tent2PersonAmount,
      tent3PersonAmount: ticketBasket.tent3PersonAmount,
      isGreenCamping: ticketBasket.isGreenCamping,
      personInfo: ticketBasket.personInfo,
    };

    // Here we are sending the ticketInfo to the database
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
    // Here are loooking for at the charater and replainting all charater with empty string
    // So you can't type any character.
    // In match it group the number in four.
    const cardValue = cardInput.current.value
      .replace(/\D/g, "")
      .match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/);
    // With a ternaire operator we setting - in the card input.
    cardInput.current.value = !cardValue[2]
      ? cardValue[1]
      : `${cardValue[1]}-${cardValue[2]}${`${cardValue[3] ? `-${cardValue[3]}` : ""}`}${`${
          cardValue[4] ? `-${cardValue[4]}` : ""
        }`}`;
    // The total input, and storing the input in the state.
    const numbers = cardInput.current.value.replace(/(\D)/g, "");
    setCard(numbers);

    // Check if the card length is 16, and if ture then focus on the next input.
    if (cardValue[0].length === 16) {
      dateInput.current.focus();
    }
  };

  // Check if the date length is 5, and if ture then focus on the next input.
  function handleDateInput() {
    const dateValue = dateInput.current.value.replace(/\D/g, "").match(/(\d{0,2})(\d{0,2})/);
    // With a ternaire operator we setting - in the card input.
    dateInput.current.value = !dateValue[2] ? dateValue[1] : `${dateValue[1]}/${dateValue[2]}`;
    // The total input, and storing the input in the state.
    const numbers = dateInput.current.value.replace(/(\D)/g, "");

    if (numbers.length === 4) {
      codeInput.current.focus();
    }
  }

  useEffect(() => {
    handleCardNumberInput();
  }, [card]);

  return (
    <section id="payment_info">
      <h2 className="heading">Payment information</h2>
      <form id="card_form" ref={formElm} onSubmit={submitted}>
        <div className="field-container">
          <label htmlFor="name">Name on card</label>
          <input id="name" type="text" placeholder="&nbsp;" required />
        </div>
        <div className="field-container">
          <label htmlFor="cardnumber">Card Number</label>
          <input
            id="cardnumber"
            type="text"
            inputMode="numeric"
            minLength="19"
            maxLength="19"
            placeholder="&nbsp;"
            required
            ref={cardInput}
            onChange={handleCardNumberInput}
          />
        </div>
        <div className="field-container">
          <label htmlFor="expirationdate">Expiration (mm/yy)</label>
          <input
            id="expirationdate"
            type="text"
            inputMode="numeric"
            // pattern="/\d{2}$\w{}$\d{2}$/"
            minLength="5"
            maxLength="5"
            placeholder="&nbsp;"
            required
            ref={dateInput}
            onChange={handleDateInput}
          />
        </div>
        <div className="field-container">
          <label htmlFor="securitycode">Security Code</label>
          <input
            id="securitycode"
            type="text"
            pattern="[0-9]+"
            inputMode="numeric"
            ref={codeInput}
            minLength="3"
            maxLength="3"
            placeholder="&nbsp;"
            required
          />
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
    </section>
  );
}
