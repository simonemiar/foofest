import { useState, useContext } from "react";
import ReactCardFlip from "react-card-flip";

import { TicketBasketContext } from "../../contexts/TicketBasketContext";

export default function TicketInBasket(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { ticketBasket, setTicketBasket } = useContext(TicketBasketContext);

  function handleClick(e) {
    setIsFlipped((prevState) => !prevState);
  }

  function addTicketTypeToBasket() {
    setTicketBasket((old) => {
      return {
        ...old,
        ticketType: props.ticketType,
        ticketAmount: 1,
        ticketPrice: props.ticketPrice,
        tent2PersonAmount: 0,
        tent3PersonAmount: 0,
        isGreenCamping: false,
      };
    });
  }

  return (
    <article className="ticket">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className="ticket_svg">
          <div className="ticket_content">
            <h2>{ticketBasket.ticketType}</h2>
            <h3>FooFest 2022</h3>
            <h4>{ticketBasket.ticketPrice} DKK</h4>
            <div className="ticket_btn">
              <button type="primary" onClick={handleClick}>
                Read more
              </button>
            </div>
          </div>
        </div>

        <div className="ticket_svg">
          <div className="ticket_content">
            <p>
              This is a {props.ticketType} ticket to FooFest 2022 - Jazz festival. The ticket cost {props.ticketPrice} DKK, and is a big nice festival with big artist.
            </p>
            <div className="ticket_btn">
              <button type="primary" onClick={handleClick}>
                Read less
              </button>
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </article>
  );
}
