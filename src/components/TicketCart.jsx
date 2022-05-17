import { useState } from "react";
export default function TicketCart(props) {
  const [ticketCount, setTicketCount] = useState(1);
  const ticketPrize = 799;
  const bookingFeee = 25;
  const totalTicketPrize = ticketPrize * ticketCount + bookingFeee;

  const ticketAmount = 3;

  const ticketOverviewInfo = {
    ticketAmount: ticketAmount,
  };

  console.log(ticketOverviewInfo);

  function addTicket() {
    setTicketCount(ticketCount + 1);
  }

  function removeTicket() {
    if (ticketCount === 1) {
      setTicketCount(1);
    } else {
      setTicketCount(ticketCount - 1);
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
          <p id="ticket_type">Regular</p>
          <p>Ticket</p>
        </div>
        <div className="amount_ui">
          <button onClick={removeTicket} id="ticket_decre">
            -
          </button>
          <span id="amount">{ticketCount}</span>
          <button onClick={addTicket} id="ticket_incre">
            +
          </button>
        </div>
        <div className="ticket_price">
          <p className="total_ticket_price">{totalTicketPrize} kr.</p>
          <p className="fee_price"> Fee: 25 kr.</p>
        </div>
      </section>
    </section>
  );
}
