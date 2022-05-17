import { Link } from "react-router-dom";

import CampingArea from "../components/CampingArea";
import TicketCart from "../components/TicketCart";
import AddOnesCart from "../components/AddOnesCart";
import ticketImg from "../assets/svg/ticket.svg";

export default function TicketDetails(props) {
  return (
    <section id="ticket_details">
      <h2>Ticket details</h2>
      <img src={ticketImg} alt="ticket" />
      <TicketCart basketItem={props.basketItem} setBasketItem={props.setBasketItem} />
      <CampingArea basketItem={props.basketItem} setBasketItem={props.setBasketItem} />
      <AddOnesCart basketItem={props.basketItem} setBasketItem={props.setBasketItem} />

      <div className="booking_flow_nav">
        <Link to="/tickets">
          <button className="back_btn shape">Back</button>
        </Link>
        <button
          className="continue_btn shape"
          onClick={() => {
            props.toggleComponentsArr.setToggleTicketDetails(false);
            props.toggleComponentsArr.setTogglePersonInfo(true);
          }}
        >
          Continue
        </button>
      </div>
    </section>
  );
}
