import { useState, useContext } from "react";

import { TicketBasketContext } from "../contexts/TicketBasketContext";

export default function TicketCart(props) {
  const { ticketBasket, setTicketBasket } = useContext(TicketBasketContext);

  // const [ticketCount, setTicketCount] = useState(1);
  // const ticketPrize = 799;
  // const bookingFeee = 25;
  // const totalTicketPrize = ticketBasket.ticketPrice * ticketCount + bookingFeee;

  const totalTicketPrize =
    ticketBasket.ticketPrice * ticketBasket.ticketAmount + ticketBasket.bookingFee;

  function addTicket() {
    // setTicketCount(ticketCount + 1);
    if (ticketBasket.ticketAmount === 5) {
      alert("You can max buy 5 tickets a the time");
    } else {
      setTicketBasket((old) => {
        return {
          ...old,
          ticketAmount: old.ticketAmount + 1,
        };
      });
    }

    console.log(ticketBasket);
  }

  function removeTicket() {
    if (ticketBasket.ticketAmount === 1) {
      // setTicketCount(1);
      setTicketBasket((old) => {
        return {
          ...old,
          ticketAmount: (old.ticketAmount = 1),
        };
      });
      alert("You need to have minimum 1 ticket");
    } else {
      // setTicketCount(ticketCount - 1);
      setTicketBasket((old) => {
        return {
          ...old,
          ticketAmount: old.ticketAmount - 1,
        };
      });
    }
  }

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
          <button onClick={removeTicket} id="ticket_decre">
            -
          </button>
          <span id="amount">{ticketBasket.ticketAmount}</span>
          <button onClick={addTicket} id="ticket_incre">
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
