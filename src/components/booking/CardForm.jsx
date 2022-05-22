import { useRef } from "react";

export default function CardForm(props) {
  const formElm = useRef(null);

  function submitted(e) {
    e.preventDefault();

    fetch("dbendpoint/orders", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname: formElm.current.elements.fullname.value,
        email: formElm.current.elements.email.value,
      })
        .then((res) => res.json())
        .then((data) => {}),
    });
    console.log(formElm.current.elements.fullname.value);
    console.log(formElm.current.elements.email.value);
  }
  return (
    <>
      <h2 className="heading">Payment information</h2>
      <form id="card_form" ref={formElm} onSubmit={submitted}>
        <div className="field-container">
          <label htmlFor="name">Name on card</label>
          <input id="name" maxLength="20" type="text" />
        </div>
        <div className="field-container">
          <label htmlFor="cardnumber">Card Number</label>
          <input id="cardnumber" type="text" pattern="[0-9]+" inputMode="numeric" />
        </div>
        <div className="field-container">
          <label htmlFor="expirationdate">Expiration (mm/yy)</label>
          <input id="expirationdate" type="text" inputMode="numeric" />
        </div>
        <div className="field-container">
          <label htmlFor="securitycode">Security Code</label>
          <input id="securitycode" type="text" pattern="[0-9]+" inputMode="numeric" maxLength="3" />
        </div>
        <button type="sumbit">Pay</button>
      </form>
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
        <button
          className="continue_btn shape"
          onClick={() => {
            props.toggleComponentsArr.setToggleCardForm(false);
            props.toggleComponentsArr.setToggleFlowComplete(true);
            props.setIsCurrent(props.isCurrent + 1);
            props.setPopup(false);
          }}
        >
          Pay
        </button>
      </div>
    </>
  );
}
