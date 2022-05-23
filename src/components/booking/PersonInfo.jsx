import { useContext } from "react";
import { TicketBasketContext } from "../../contexts/TicketBasketContext";
import PersonForm from "./PersonForm";

export default function TicketDetails(props) {
  const { ticketBasket } = useContext(TicketBasketContext);

  let personFormArr = [];
  for (var i = 1; i < ticketBasket.ticketAmount + 1; i++) {
    personFormArr.push(i);
  }

  return (
    <section id="person_info">
      <h2 className="heading">Your personal information</h2>

      {personFormArr.map((ticket) => (
        <PersonForm key={ticket} ticket={ticket} />
      ))}

      {/* <PersonForm props={props} /> */}
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
        <button
          className="continue_btn shape"
          onClick={() => {
            props.toggleComponentsArr.setTogglePersonInfo(false);
            props.toggleComponentsArr.setToggleBasketOverview(true);
            props.setIsCurrent(props.isCurrent + 1);
          }}
        >
          Continue
        </button>
      </div>
    </section>
  );
}
