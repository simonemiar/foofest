import { useRef, useContext } from "react";

import { TicketBasketContext } from "../../contexts/TicketBasketContext";

export default function PersonForm(props) {
  const { ticketBasket, setTicketBasket } = useContext(TicketBasketContext);
  const formElm = useRef(null);

  let btnText = "Send data";

  function submitted(e) {
    console.log("submit complete");
    e.preventDefault();
    console.log(props);

    // props.setIsCurrent(props.isCurrent + 1);
    // console.log(props.toggleComponentsArr);
    // console.log("Yo", props.toggleComponentsArr.TogglePersonInfo);

    const personInfo = {
      fullname: formElm.current.elements.fullname.value,
      email: formElm.current.elements.email.value,
      phone_number: formElm.current.elements.phone_code.value + formElm.current.elements.phone_num.value,
      zip_code: formElm.current.elements.zip_code.value,
      street: formElm.current.elements.street.value,
      city: formElm.current.elements.city.value,
      country: formElm.current.elements.country.value,
    };

    setTicketBasket((old) => {
      return { ...old, personInfo };
    });
    // console.log(personInfo);

    alert("Your info is saved, press the coninue");

    // props.toggleComponentsArr.setTogglePersonInfo(false);
    // props.toggleComponentsArr.setToggleBasketOverview(true);
    // props.setIsCurrent(props.isCurrent + 1);

    // fetch("dbendpoint/orders", {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     fullname: formElm.current.elements.fullname.value,
    //     email: formElm.current.elements.email.value,
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {}),
    // });
    // console.log(formElm.current.elements.fullname.value);
    // console.log(formElm.current.elements.email.value);
  }

  return (
    <>
      <form id="person_form" ref={formElm} onSubmit={submitted}>
        <div className="fullname">
          <label htmlFor="fullname" required>
            Fullname
          </label>
          <input type="text" id="fullname" />
        </div>
        <div className="email">
          <label htmlFor="email" required>
            E-mail
          </label>
          <input type="email" id="email" inputMode="email" />
        </div>
        <div className="full_phone">
          <div className="phone_code">
            <label htmlFor="phone_code">Code</label>
            <select name="phone_code" id="phone_code">
              <option value="+45">+45</option>
              <option value="+47">+47</option>
              <option value="+00">+00</option>
            </select>
          </div>
          <div className="phone_num">
            <label htmlFor="phone_num" required>
              Phone number
            </label>
            <input type="tel" id="phone_num" inputMode="tel" pattern="[0-9]+" maxLength="8" />
          </div>
        </div>
        <div className="street">
          <label htmlFor="street" required>
            Street
          </label>
          <input type="text" id="street" />
        </div>
        <div className="zip_city">
          <div className="zip_code">
            <label htmlFor="zip_code">Zip code</label>
            <input type="text" id="zip_code" inputMode="numeric" pattern="[0-9]+" maxLength="4" required />
          </div>
          <div className="city">
            <label htmlFor="city" required>
              City
            </label>
            <input type="text" id="city" />
          </div>
        </div>
        <div className="country">
          <label htmlFor="country" required>
            Country
          </label>
          <input type="text" id="country" />
        </div>
        {/* <div className="booking_flow_nav">
        <button
          className="back_btn shape"
          onClick={() => {
            props.toggleComponentsArr.setTogglePersonInfo(false);
            props.toggleComponentsArr.setToggleTicketDetails(true);
            props.setIsCurrent(props.isCurrent - 1);
          }}
        >
          Back
        </button>
        <button
          type="submit"
          className="continue_btn shape"
          onClick={() => {
            props.toggleComponentsArr.setTogglePersonInfo(false);
            props.toggleComponentsArr.setToggleBasketOverview(true);
            props.setIsCurrent(props.isCurrent + 1);
          }}
        >
          Continue
        </button>
      </div> */}
        <button className="shape" type="submit" onClick={() => (btnText = "Your info it sendt")}>
          {btnText}
        </button>
      </form>
    </>
  );
}
