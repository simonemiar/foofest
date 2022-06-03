import { useContext } from "react";
// import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";
import party from "party-js";

import { TicketBasketContext } from "../../contexts/TicketBasketContext";

export default function Ticket(props) {
  // const [isFlipped, setIsFlipped] = useState(false);
  const { setTicketBasket } = useContext(TicketBasketContext);

  // function handleClick(e) {
  //   setIsFlipped((prevState) => !prevState);
  // }

  // Here are we updating the ticketBasket state in the context
  // With the ticketType, ticketPrice and reseting the tent amount
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
      {/* We are using React-card-flip and it only works if there is two boxing inside it. */}
      {/* <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical"> */}
      <div className="ticket_svg">
        <div className="ticket_content">
          <h2>{props.ticketType}</h2>
          <h3>FooFest 2022</h3>
          <h4>{props.ticketPrice} DKK</h4>
          <div className="ticket_btn">
            {/* If the btn is clicked, the card will turn to the other side */}
            {/* <button type="primary" onClick={handleClick}>
              Read more
            </button>
            OR */}
            {/* Here are we adding the selected ticket to the ticketBasket, and going the the basket page. */}
            <Link
              onClick={(e) => {
                party.confetti(e.target, {
                  shapes: ["star"],
                  count: party.variation.range(50, 200),
                  size: party.variation.range(1, 2),
                  speed: party.variation.range(100, 1000),
                });
                addTicketTypeToBasket();
              }}
              className="btn"
              to="/basket"
            >
              Buy
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="ticket_svg">
        <div className="ticket_content">
          <p>
            This is a {props.ticketType} ticket to FooFest 2022 - Jazz festival. The ticket cost
            {props.ticketPrice} DKK, and is a big nice festival with big artist.
          </p>
          <div className="ticket_btn">
            <button type="primary" onClick={handleClick}>
              Read less
            </button>
            OR
            <Link
              onClick={(e) => {
                party.confetti(e.target, { count: party.variation.range(100, 200) });
                addTicketTypeToBasket();
              }}
              to="/basket"
            >
              Buy
            </Link>
          </div>
        </div>
      </div> */}
      {/* </ReactCardFlip> */}
    </article>
  );
}
