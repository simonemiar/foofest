import { useContext } from "react";

import { TicketBasketContext } from "../../contexts/TicketBasketContext";
import { addTicket, removeTicket } from "./ticketFunction";

export default function TicketCart(props) {
  const { ticketBasket, setTicketBasket } = useContext(TicketBasketContext);

  const totalTicketPrize =
    ticketBasket.ticketPrice * ticketBasket.ticketAmount + ticketBasket.bookingFee;

  return (
    <section className="ticket_cart">
      <div className="top">
        <p>Ticket</p>
        <p>Quanity</p>
        <p>Price</p>
      </div>

      <section className="ticket_cart_content">
        <div className="ticket_name">
          <p id="ticket_type">
            {ticketBasket.ticketType}
            {/* {
              (ticketBasket.ticketType =
                "Regular" || "VIP"
                  ? alert("You need to pick at ticket type, back to pick one")
                  : null)
            } */}
          </p>
          <p>Ticket</p>
        </div>
        <div className="amount_ui">
          <button onClick={() => removeTicket(ticketBasket, setTicketBasket)} id="ticket_decre">
            -
          </button>
          <span id="amount">{ticketBasket.ticketAmount}</span>
          <button onClick={() => addTicket(ticketBasket, setTicketBasket)} id="ticket_incre">
            +
          </button>
        </div>
        <div className="ticket_price">
          <p className="total_ticket_price">{totalTicketPrize} kr.</p>
          <p className="fee_price">Fee: {ticketBasket.bookingFee} kr.</p>
        </div>
      </section>
    </section>
  );
}
