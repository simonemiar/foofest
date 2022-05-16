import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";

export default function Ticket() {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick(e) {
    setIsFlipped((prevState) => !prevState);
  }

  return (
    <article className="ticket">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className="ticket_svg">
          <div className="ticket_content">
            <h3>VIP</h3>
            <h4>FooFest 2022</h4>
            <p>1299 DKK</p>
            <div className="ticket_btn">
              <button>{<Link to="/basket">Buy</Link>}</button> OR
              <button type="primary" onClick={handleClick}>
                Read more
              </button>
            </div>
          </div>
        </div>

        <div className="ticket_svg">
          <div className="ticket_content">
            <p>
              This is a regular ticket to FooFest 2022 - Jazz festival. The ticket cost 799 DKK, and
              is a big nice festival with big artist.
            </p>
            <div className="ticket_btn">
              <button>{<Link to="/basket">Buy</Link>}</button> OR
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
