import { useState, useContext, useEffect } from "react";

import { TicketBasketContext } from "../../contexts/TicketBasketContext";

export default function BasketOverview(props) {
  const { ticketBasket, setTicketBasket } = useContext(TicketBasketContext);

  const [toggleTent2Person, setToggleTent2Person] = useState(false);
  const [toggleTent3Person, setToggleTent3Person] = useState(false);
  const [toggleGreenCamping, setToggleGreenCamping] = useState(false);

  const totalTicketPrize = ticketBasket.ticketPrice * ticketBasket.ticketAmount;
  const totalTwoTent = ticketBasket.tent2PersonPrice * ticketBasket.tent2PersonAmount;
  const totalThreeTent = ticketBasket.tent3PersonPrice * ticketBasket.tent3PersonAmount;

  const totalPrice =
    totalTwoTent +
    totalThreeTent +
    (ticketBasket.isGreenCamping ? ticketBasket.greenCamping : 0) +
    ticketBasket.ticketPrice * ticketBasket.ticketAmount;

  const totalItems =
    ticketBasket.tent2PersonAmount +
    ticketBasket.tent3PersonAmount +
    ticketBasket.isGreenCamping +
    ticketBasket.ticketAmount;

  useEffect(() => {
    setToggleTent2Person(ticketBasket.tent2PersonAmount ? true : false);
    setToggleTent3Person(ticketBasket.tent3PersonAmount ? true : false);
    setToggleGreenCamping(ticketBasket.isGreenCamping ? true : false);
  }, []);

  //TicketAmount

  function addTicket() {
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
      setTicketBasket((old) => {
        return {
          ...old,
          ticketAmount: (old.ticketAmount = 1),
        };
      });
      alert("You need to have minimum 1 ticket");
    } else {
      setTicketBasket((old) => {
        return {
          ...old,
          ticketAmount: old.ticketAmount - 1,
        };
      });
    }
  }

  // Functions for 2-person tent
  function addTwoTent() {
    if (ticketBasket.tent2PersonAmount === ticketBasket.ticketAmount) {
      alert("You can only have as many tent as tickets");
    } else {
      setTicketBasket((old) => {
        return {
          ...old,
          tent2PersonAmount: ticketBasket.tent2PersonAmount + 1,
        };
      });
    }
  }

  function removeTwoTent() {
    if (ticketBasket.tent2PersonAmount === 0) {
      setTicketBasket((old) => {
        return {
          ...old,
          tent2PersonAmount: (ticketBasket.tent2PersonAmount = 0),
        };
      });
    } else {
      setTicketBasket((old) => {
        return { ...old, tent2PersonAmount: ticketBasket.tent2PersonAmount - 1 };
      });
    }
  }

  // Functions for 3-person tent
  function addThreeTent() {
    if (ticketBasket.tent3PersonAmount === ticketBasket.ticketAmount) {
      alert("You can only have as many tent as tickets");
    } else {
      setTicketBasket((old) => {
        return {
          ...old,
          tent3PersonAmount: ticketBasket.tent3PersonAmount + 1,
        };
      });
    }
  }

  function removeThreeTent() {
    if (ticketBasket.tent3PersonAmount === 0) {
      setTicketBasket((old) => {
        return {
          ...old,
          tent3PersonAmount: (ticketBasket.tent3PersonAmount = 0),
        };
      });
    } else {
      setTicketBasket((old) => {
        return { ...old, tent3PersonAmount: ticketBasket.tent3PersonAmount - 1 };
      });
    }
  }

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
              <p id="ticket_type">Regular Ticket</p>
            </div>

            <div className="ticket_amount">
              <button onClick={removeTicket}>-</button>
              <span id="amount_ticket">{ticketBasket.ticketAmount}</span>
              <button onClick={addTicket}>+</button>
            </div>
            <div className="ticket_price">
              <p className="total_ticket_price">{totalTicketPrize} kr.</p>
            </div>
          </article>

          {toggleTent2Person ? (
            <article className="tent_row">
              <div className="tent_name">
                <p>2 person tent</p>
              </div>
              <div className="tent_ui">
                <button onClick={removeTwoTent}>-</button>
                <span className="amount" id="amount_tent">
                  {ticketBasket.tent2PersonAmount}
                </span>
                <button onClick={addTwoTent}>+</button>
              </div>

              <div className="tent_total">
                <p>
                  {ticketBasket.tent2PersonAmount > 1
                    ? totalTwoTent
                    : ticketBasket.tent2PersonPrice}{" "}
                  kr.
                </p>
              </div>
            </article>
          ) : null}

          {toggleTent3Person ? (
            <article className="tent_row">
              <div className="tent_name">
                <p>3 person tent</p>
                <p>Remove</p>
              </div>
              <div className="tent_ui">
                <button onClick={removeThreeTent}>-</button>
                <span id="amount_tent">{ticketBasket.tent3PersonAmount}</span>
                <button onClick={addThreeTent}>+</button>
              </div>

              <div className="tent_total">
                <p>
                  {ticketBasket.tent3PersonAmount > 1
                    ? totalThreeTent
                    : ticketBasket.tent3PersonPrice}{" "}
                  kr.
                </p>
              </div>
            </article>
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
            <p>Total ({totalItems} items)</p>
            <p className="total_price">{totalPrice} kr.</p>
          </article>
        </section>
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
    </>
  );
}
