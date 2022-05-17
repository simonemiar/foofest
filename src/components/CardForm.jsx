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
        <div class="field-container">
          <label for="name">Name</label>
          <input id="name" maxLength="20" type="text" />
        </div>
        <div class="field-container">
          <label for="cardnumber">Card Number</label>
          <input id="cardnumber" type="text" pattern="[0-9]*" inputmode="numeric" />
        </div>
        <div class="field-container">
          <label for="expirationdate">Expiration (mm/yy)</label>
          <input id="expirationdate" type="text" pattern="[0-9]*" inputmode="numeric" />
        </div>
        <div class="field-container">
          <label for="securitycode">Security Code</label>
          <input id="securitycode" type="text" pattern="[0-9]*" inputmode="numeric" />
        </div>
        <button type="sumbit">Pay</button>
      </form>
    </>
  );
}
