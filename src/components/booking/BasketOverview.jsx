import { useState, useContext, useEffect } from "react";

import { TicketBasketContext } from "../../contexts/TicketBasketContext";
import {
  addTicket,
  removeTicket,
  addTwoTent,
  removeTwoTent,
  addThreeTent,
  removeThreeTent,
  // greenOption,
} from "./ticketFunction";

import QuantityLine from "./QuantityLine";

export default function BasketOverview(props) {
  const { ticketBasket, setTicketBasket } = useContext(TicketBasketContext);

  // Here are we setting if the tent is selected or not
  const [toggleTent2Person, setToggleTent2Person] = useState(false);
  const [toggleTent3Person, setToggleTent3Person] = useState(false);
  const [toggleGreenCamping, setToggleGreenCamping] = useState(false);

  // Here are we calculating the total tents, price and amount.
  const totalTicketPrize = ticketBasket.ticketPrice * ticketBasket.ticketAmount;
  const totalTwoTent = ticketBasket.tent2PersonPrice * ticketBasket.tent2PersonAmount;
  const totalThreeTent = ticketBasket.tent3PersonPrice * ticketBasket.tent3PersonAmount;

  const totalPrice =
    totalTwoTent +
    totalThreeTent +
    (ticketBasket.isGreenCamping ? ticketBasket.greenCamping : 0) +
    ticketBasket.ticketPrice * ticketBasket.ticketAmount +
    ticketBasket.bookingFee;

  const totalItems =
    ticketBasket.tent2PersonAmount +
    ticketBasket.tent3PersonAmount +
    ticketBasket.isGreenCamping +
    ticketBasket.ticketAmount;

  useEffect(() => {
    setToggleTent2Person(ticketBasket.tent2PersonAmount ? true : false);
    setToggleTent3Person(ticketBasket.tent3PersonAmount ? true : false);
    setToggleGreenCamping(ticketBasket.isGreenCamping ? true : false);
  }, [ticketBasket]);

  // Function for green option add-on
  function greenOption(e) {
    const checked = e.target.checked;
    if (checked) {
      setTicketBasket((old) => {
        return {
          ...old,
          isGreenCamping: true,
        };
      });
    } else {
      setTicketBasket((old) => {
        return {
          ...old,
          isGreenCamping: false,
        };
      });
    }
  }

  return (
    <>
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
              <p id="ticket_type">{ticketBasket.ticketType}</p>
              <p>Ticket</p>
            </div>

            <div className="ticket_amount">
              <button onClick={() => removeTicket(ticketBasket, setTicketBasket)}>-</button>
              <span id="amount_ticket">{ticketBasket.ticketAmount}</span>
              <button onClick={() => addTicket(ticketBasket, setTicketBasket)}>+</button>
            </div>
            <div className="ticket_price">
              <p className="total_ticket_price">
                <span className="bold">{totalTicketPrize} kr.</span>
              </p>
            </div>
          </article>

          {/* Here are we prop drilling all the different states and variable there is need */}
          {toggleTent2Person ? (
            <QuantityLine
              ticketBasket={ticketBasket}
              setTicketBasket={setTicketBasket}
              addTent={addTwoTent}
              removeTent={removeTwoTent}
              totalTent={totalTwoTent}
              tentPersonAmount={ticketBasket.tent2PersonAmount}
              tentPersonPrice={ticketBasket.tent2PersonPrice}
              title={"2 person"}
            />
          ) : null}

          {toggleTent3Person ? (
            <QuantityLine
              ticketBasket={ticketBasket}
              setTicketBasket={setTicketBasket}
              addTent={addThreeTent}
              removeTent={removeThreeTent}
              totalTent={totalThreeTent}
              tentPersonAmount={ticketBasket.tent3PersonAmount}
              tentPersonPrice={ticketBasket.tent3PersonPrice}
              title={"3 person"}
            />
          ) : null}

          {toggleGreenCamping ? (
            <article className="tent_row">
              <div className="green_name">
                <p>Green camping</p>
                <p>Option to help change the world</p>
              </div>
              <div className="green_ui">
                <input
                  onChange={greenOption}
                  type="checkbox"
                  checked={ticketBasket.isGreenCamping}
                  className="green-option_check"
                ></input>
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
            <p>
              Total ({totalItems} {totalItems > 1 ? "items" : "item"})
            </p>
            <p className="total_price">{totalPrice} kr.</p>
          </article>
        </section>
        <div className="booking_flow_nav">
          <button
            className="back_btn shape"
            onClick={() => {
              props.toggleComponentsArr.setToggleBasketOverview(false);
              props.toggleComponentsArr.setTogglePersonInfo(true);
              props.setIsCurrent(props.isCurrent - 1);
            }}
          >
            Back
          </button>
          {/* Here are we updating with components that is shown */}
          <button
            className="continue_btn shape"
            onClick={() => {
              props.toggleComponentsArr.setToggleBasketOverview(false);
              props.toggleComponentsArr.setToggleCardForm(true);
              props.setIsCurrent(props.isCurrent + 1);
            }}
          >
            Continue
          </button>
        </div>
      </section>
    </>
  );
}
