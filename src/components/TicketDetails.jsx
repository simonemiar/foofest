import { Link } from "react-router-dom";

import CampingArea from "../components/CampingArea";
import TicketCart from "../components/TicketCart";
import AddOnesCart from "../components/AddOnesCart";
import ticketImg from "../assets/svg/ticket.svg";

export default function TicketDetails(props) {
  // { setToggleTicketDetails, setTogglePersonInfo }
  console.log(props);
  return (
    <section id="ticket_details">
      <h2 className="heading">Ticket details</h2>
      <section className="img_cart_container">
        <img className="ticket_img" src={ticketImg} alt="ticket" />
        <TicketCart />
      </section>
      <CampingArea />
      <AddOnesCart />

      <div className="booking_flow_nav">
        <Link to="/tickets">
          <button className="back_btn shape">Back</button>
        </Link>
        <button
          className="continue_btn shape"
          onClick={() => {
            props.toggleComponentsArr.setToggleTicketDetails(false);
            props.toggleComponentsArr.setTogglePersonInfo(true);
            props.setIsCurrent(props.isCurrent + 1);
          }}
        >
          Continue
        </button>
      </div>
    </section>
  );
}
