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
  // Here are calcting the total tents, total price, and the total number of items in the cart
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
  // Here are we updating the ticketBasket object with the green camping option
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
        <h4>Note: The price includes the crew setting up your tent</h4>
      </article>

      <section className="add-ons_cart_content">
        {/* Here are we prop drilling all the different states and variable there is need */}
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
            <p className="bold">Green camping</p>
            <h5>Option to help change the world</h5>
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
        <p>
          Total ({totalItems} {totalItems > 1 ? "items" : "item"})
        </p>
        <p className="total_price">{totalPrice} kr.</p>
      </article>
    </section>
  );
}
