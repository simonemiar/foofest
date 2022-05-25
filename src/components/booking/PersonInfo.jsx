import { useContext, useRef, useState } from "react";
import { TicketBasketContext } from "../../contexts/TicketBasketContext";
import PersonDetails from "./PersonDetails";

export default function TicketDetails(props) {
  const formElm = useRef(null);
  const [personInfo, setPersonInfo] = useState([]);
  const { ticketBasket, setTicketBasket } = useContext(TicketBasketContext);

  let personFormArr = [];
  for (var i = 1; i < ticketBasket.ticketAmount + 1; i++) {
    personFormArr.push({ number: i, fullname: "", email: "" });
    console.log(personFormArr);
  }

  // console.log(formElm.current.elements);

  function submitted(e) {
    e.preventDefault();

    console.log(personInfo);
    // props.toggleComponentsArr.setTogglePersonInfo(false);
    // props.toggleComponentsArr.setToggleBasketOverview(true);
    // props.setIsCurrent(props.isCurrent + 1);

    if (ticketBasket.ticketAmount > 1) {
      // console.log(e.target.elements);

      e.target.elements.fullname.forEach((input, idx) => {
        setTicketBasket((old) => {
          return { ...old, personInfo: [...old.personInfo, { fullname: input.value }] };
        });
      });

      e.target.elements.email.forEach((input, idx) => {
        setTicketBasket((old) => {
          return { ...old, personInfo: [...old.personInfo, { email: input.value }] };
          // return { ...old, personInfo: [...old.personInfo[idx], { email: input.value }] };
        });
      });
    }

    if (ticketBasket.ticketAmount === 1) {
      setTicketBasket((old) => {
        return {
          ...old,
          personInfo: [
            {
              fullname: formElm.current.elements.fullname.value,
              email: formElm.current.elements.email.value,
              // phone_number: Number(
              //   formElm.current.elements.phone_code.value + formElm.current.elements.phone_num.value
              // ),
              // zip_code: Number(formElm.current.elements.zip_code.value),
              // street: formElm.current.elements.street.value,
              // city: formElm.current.elements.city.value,
              // country: formElm.current.elements.country.value,
            },
          ],
        };
      });
    }

    // alert("Your info is saved, press the coninue");

    console.log(ticketBasket.personInfo);
  }

  return (
    <section id="person_info">
      <h2 className="heading">Your personal information</h2>

      <form id="person_form" ref={formElm} onSubmit={submitted}>
        {personFormArr.map((details) => (
          <PersonDetails
            key={details.number}
            details={details}
            personInfo={personInfo}
            setPersonInfo={setPersonInfo}
          />
        ))}
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
      </form>
    </section>
  );
}
