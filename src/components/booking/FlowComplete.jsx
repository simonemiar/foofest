import { useContext } from "react";
import { addTicket, removeTicket} from "./ticketFunction";
import { TicketBasketContext } from "../../contexts/TicketBasketContext";

export default function FlowComplete(props) {
  const { ticketBasket, setTicketBasket } = useContext(TicketBasketContext);
  const totalTicketPrize = ticketBasket.ticketPrice * ticketBasket.ticketAmount;

  // { setToggleTicketDetails, setTogglePersonInfo }
  console.log(props);
  return (
    <>
    <section id="ticket_details">
      <h2>Purchase confirmation</h2>
      <div className="top-bar">
        <p>Ticket</p>
        <p>Quantity</p>
        <p>Price</p>
      </div>
      <section className="overview_content">
      <article className="ticket_row">
            <div className="ticket_name">
              <p id="ticket_type">Regular Ticket</p>
            </div>

            <div className="ticket_amount">
              <button onClick={() => removeTicket(ticketBasket, setTicketBasket)}>-</button>
              <span id="amount_ticket">{ticketBasket.ticketAmount}</span>
              <button onClick={() => addTicket(ticketBasket, setTicketBasket)}>+</button>
            </div>
            <div className="ticket_price">
              <p className="total_ticket_price">{totalTicketPrize} kr.</p>
            </div>
          </article>

      </section>



      {/* <Link to="/">
        <button className="shape">Frontpage</button>
      </Link>
      <Link to="/schedule">
        <button className="shape">See schedule</button>
      </Link> */}
    </section>
    </>
  );
}
