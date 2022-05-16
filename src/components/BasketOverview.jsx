import { useState } from "react";
export default function BasketOverview() {
  const [threePersonTent, setThreePersonTent] = useState(0);
  const [ticketCount, SetTicketCount] = useState(1);
  const ticketPrize = 799;
  const bookingFeee = 25;
  const totalTicketPrize = ticketPrize * ticketCount;
  const totalThreeTent = 399 * threePersonTent;
  const totalPrice = totalTicketPrize + bookingFeee + totalThreeTent;
  const totalItems = threePersonTent + ticketCount;

  // Functions for 3-person tent
  function addThreeTent() {
    setThreePersonTent(threePersonTent + 1);
  }

  function removeThreeTent() {
    if (threePersonTent === 0) {
      setThreePersonTent(0);
    } else {
      setThreePersonTent(threePersonTent - 1);
    }
  }
  function addTicket() {
    SetTicketCount(ticketCount + 1);
  }

  function removeTicket() {
    if (ticketCount === 1) {
      SetTicketCount(1);
    } else {
      SetTicketCount(ticketCount - 1);
    }
  }
  return (
    <section className="basket_overview">
      <h2>Basket overview</h2>
      <div className="top-bar">
        <p>Ticket</p>
        <p>Quanity</p>
        <p>Price</p>
      </div>

      <section className="overview_content">
        <article className="ticket_row">
          <div className="ticket_name">
            <p id="ticket_type">Regular Ticket</p>
          </div>

          <div className="ticket_amount">
            <button onClick={removeTicket}>-</button>
            <span id="amount_ticket">{ticketCount}</span>
            <button onClick={addTicket}>+</button>
          </div>
          <div className="ticket_price">
            <p className="total_ticket_price">{totalTicketPrize} kr.</p>
          </div>
        </article>

        <article className="tent_row">
          <div className="tent_name">
            <p>3 person tent</p>
            <p>Remove</p>
          </div>
          <div className="tent_ui">
            <button onClick={removeThreeTent}>-</button>
            <span id="amount_tent">{threePersonTent}</span>
            <button onClick={addThreeTent}>+</button>
          </div>

          <div className="tent_total">
            <p>{totalThreeTent} kr.</p>
          </div>
        </article>

        <article className="fee_row">
          <div className="fee_name">
            <p>Booking fee</p>
          </div>

          <div className="fee_total">
            <p>25 kr.</p>
          </div>
        </article>
        <article className="total_bar">
          <p>Total ({totalItems} items)</p>
          <p className="total_price">{totalPrice} kr.</p>
        </article>
      </section>
    </section>
  );
}
