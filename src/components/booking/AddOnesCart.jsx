import { useContext } from "react";
import { TicketBasketContext } from "../../contexts/TicketBasketContext";
import {
  addTwoTent,
  removeTwoTent,
  addThreeTent,
  removeThreeTent,
  // greenOption,
} from "./ticketFunction";
import QuantityLine from "./QuantityLine";

export default function AddOnesCart() {
  const { ticketBasket, setTicketBasket } = useContext(TicketBasketContext);

  // Cart UI varibles:
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
    <section id="add-ons_cart">
      <div id="top-bar">
        <p>Add-on</p>
        <p>Quanity</p>
        <p>Price</p>
      </div>
      <article className="note">
        <p>Note: The price includes the crew setting up your tent</p>
      </article>

      <section className="add-ons_cart_content">
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

        <article className="green_camping_ui">
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
      </section>
      <article className="total_bar">
        <p>Total ({totalItems} items)</p>
        <p className="total_price">{totalPrice} kr.</p>
      </article>
    </section>
  );
}