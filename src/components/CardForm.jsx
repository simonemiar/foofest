import { useRef } from "react";

export default function CardForm() {
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
      <form id="card_form" ref={formElm} onSubmit={submitted}>
        <div className="field-container">
          <label htmlFor="name">Name</label>
          <input id="name" maxLength="20" type="text" />
        </div>
        <div className="field-container">
          <label htmlFor="cardnumber">Card Number</label>
          <input id="cardnumber" type="text" pattern="[0-9]*" inputMode="numeric" />
        </div>
        <div className="field-container">
          <label htmlFor="expirationdate">Expiration (mm/yy)</label>
          <input id="expirationdate" type="text" pattern="[0-9]*" inputMode="numeric" />
        </div>
        <div className="field-container">
          <label htmlFor="securitycode">Security Code</label>
          <input id="securitycode" type="text" pattern="[0-9]*" inputMode="numeric" />
        </div>
        <button type="sumbit">Pay</button>
      </form>
    </>
  );
}
