import CampingArea from "../components/CampingArea";
import TicketCart from "../components/TicketCart";
import AddOnesCart from "../components/AddOnesCart";
import ticketImg from "../assets/svg/ticket.svg";

export default function TicketDetails(props) {
  return (
    <section id="ticket_details">
      <h2>Ticket details</h2>
      <img src={ticketImg} alt="ticket" />
      <TicketCart />
      <CampingArea />
      <AddOnesCart />
      <button className="shape" onClick={() => props.setShowPersonInfo(true)}>
        Person info
      </button>
    </section>
  );
}
