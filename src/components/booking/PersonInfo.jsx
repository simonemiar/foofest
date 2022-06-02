import { useContext, useRef } from "react";
import { TicketBasketContext } from "../../contexts/TicketBasketContext";
import PersonDetails from "./PersonDetails";

export default function TicketDetails(props) {
  const formElm = useRef(null);
  const { ticketBasket, setTicketBasket } = useContext(TicketBasketContext);

  // Here are we making an array based on the amount of tickets.
  let personFormArr = [];
  for (var i = 1; i < ticketBasket.ticketAmount + 1; i++) {
    personFormArr.push(i);
  }

  function submitted(e) {
    e.preventDefault();

    props.toggleComponentsArr.setTogglePersonInfo(false);
    props.toggleComponentsArr.setToggleBasketOverview(true);
    props.setIsCurrent(props.isCurrent + 1);

    // Here are we taking the values from the forms and creating a object.
    const persons = [...formElm.current.querySelectorAll("[data-person]")].map((fieldset) => {
      const fullname = fieldset.querySelector("[name=fullname]").value;
      const email = fieldset.querySelector("[name=email]").value;
      const phone_code = fieldset.querySelector("[name=phone_code]").value;
      const phone_num = fieldset.querySelector("[name=phone_num]").value;
      const phone_number = phone_code + phone_num;
      const street = fieldset.querySelector("[name=street]").value;
      const zip_code = fieldset.querySelector("[name=zip_code]").value;
      const city = fieldset.querySelector("[name=city]").value;
      const country = fieldset.querySelector("[name=country]").value;
      return { fullname, email, phone_number, street, zip_code, city, country };
    });

    // Here are we updating the ticketBasket with the persons object.
    setTicketBasket((old) => {
      return { ...old, personInfo: persons };
    });

    console.log(ticketBasket.personInfo);
  }

  return (
    <section id="person_info">
      <h2 className="heading">Your personal information</h2>

      <form id="person_form" ref={formElm} onSubmit={submitted}>
        {/* Here are we creating forms based on the amount of tickets */}
        {personFormArr.map((details) => (
          <PersonDetails key={details} details={details} />
        ))}
        <div className="booking_flow_nav">
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
          <button type="submit" className="continue_btn shape">
            Continue
          </button>
        </div>
      </form>
    </section>
  );
}
