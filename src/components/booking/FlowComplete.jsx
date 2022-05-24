import { useState, useContext, useEffect } from "react";
import { TicketBasketContext } from "../../contexts/TicketBasketContext";
import orderIllustration from "../../assets/svg/confirmation.svg";

export default function FlowComplete(props) {
  const { ticketBasket, setTicketBasket } = useContext(TicketBasketContext);

  const ordernumber = Math.floor(Math.random() * 10000000 + 1);

  const [toggleTent2Person, setToggleTent2Person] = useState(false);
  const [toggleTent3Person, setToggleTent3Person] = useState(false);
  const [toggleGreenCamping, setToggleGreenCamping] = useState(false);

  const totalTicketPrize = ticketBasket.ticketPrice * ticketBasket.ticketAmount;
  const totalTwoTent = ticketBasket.tent2PersonPrice * ticketBasket.tent2PersonAmount;
  const totalThreeTent = ticketBasket.tent3PersonPrice * ticketBasket.tent3PersonAmount;

  const totalPrice = totalTwoTent + totalThreeTent + (ticketBasket.isGreenCamping ? ticketBasket.greenCamping : 0) + ticketBasket.ticketPrice * ticketBasket.ticketAmount + ticketBasket.bookingFee;

  const totalItems = ticketBasket.tent2PersonAmount + ticketBasket.tent3PersonAmount + ticketBasket.isGreenCamping + ticketBasket.ticketAmount;

  useEffect(() => {
    setToggleTent2Person(ticketBasket.tent2PersonAmount ? true : false);
    setToggleTent3Person(ticketBasket.tent3PersonAmount ? true : false);
    setToggleGreenCamping(ticketBasket.isGreenCamping ? true : false);
  }, [ticketBasket]);

  // { setToggleTicketDetails, setTogglePersonInfo }
  return (
    <section id="confirmation_page">
      <h2>Purchase confirmation</h2>
      <h3>Ordernumber: {ordernumber} </h3>

      <div className="illustration">
        <img src={orderIllustration} alt={orderIllustration} />
      </div>

      <div className="text_info">
        <h3>We’ve received your order, and we will email it to you as fast as possible</h3>

        <p>Please view your order details below</p>
      </div>

      <div className="top-bar">
        <p>Ticket</p>
        <p>Quantity</p>
        <p>Price</p>
      </div>

      <section className="overview_content">
        <article className="ticket_row">
          <div className="ticket_name">
            <p>Ticket</p>
            <p id="ticket_type">{ticketBasket.ticketType}</p>
          </div>

          <div className="ticket_amount">
            <span id="amount_ticket">{ticketBasket.ticketAmount}</span>
          </div>
          <div className="ticket_price">
            <p className="total_ticket_price">{totalTicketPrize} kr.</p>
          </div>
        </article>

        {toggleTent2Person ? (
          <article className="tent_row">
            <div className="tent_name">
              <p>2 person</p>
              <p>Tent</p>
            </div>
            <div className="tent_ui">
              <span className="amount_ticket">{ticketBasket.tent2PersonAmount}</span>
            </div>
            <div className="tent_total">
              <p>{ticketBasket.tent2PersonAmount > 1 ? totalTwoTent : ticketBasket.tent2PersonPrice} kr.</p>
            </div>
          </article>
        ) : null}

        {toggleTent3Person ? (
          <article className="tent_row">
            <div className="tent_name">
              <p>3 person</p>
              <p>Tent</p>
            </div>
            <div className="tent_ui">
              <span className="amount_ticket">{ticketBasket.tent3PersonAmount}</span>
            </div>
            <div className="tent_total">
              <p>{ticketBasket.tent3PersonAmount > 1 ? totalThreeTent : ticketBasket.tent3PersonPrice} kr.</p>
            </div>
          </article>
        ) : null}

        {toggleGreenCamping ? (
          <article className="tent_row">
            <div className="green_name">
              <p>Green camping</p>
              <p>Option to help change the world</p>
            </div>

            <div className="green_total">
              <p>249 kr.</p>
            </div>
          </article>
        ) : null}

        <article className="fee_row">
          <div className="fee_name">
            <p>Booking fee</p>
          </div>

          <div className="fee_total">
            <p>{ticketBasket.bookingFee} kr.</p>
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
