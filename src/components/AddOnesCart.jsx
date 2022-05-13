import { useState } from "react";
export default function AddOnesCart() {
  const [twoPersonTent, setTwoPersonTent] = useState(0);
  const [threePersonTent, setThreePersonTent] = useState(0);

  // Cart UI varibles:

  const totalTwoTent = 299 * twoPersonTent;
  const totalThreeTent = 399 * threePersonTent;
  const totalPrice = totalTwoTent + totalThreeTent;

  const totalItems = twoPersonTent + threePersonTent;

  // Functions for 2-person tent

  function addTwoTent() {
    setTwoPersonTent(twoPersonTent + 1);
  }

  function removeTwoTent() {
    if (twoPersonTent === 0) {
      setTwoPersonTent(0);
    } else {
      setTwoPersonTent(twoPersonTent - 1);
    }
  }

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

  function includeGreenOption() {
    console.log("includeGreenOption");
  }

  return (
    <section id="add-ons_cart">
      <div id="top-bar">
        <p>Add-ons</p>
      </div>
      <div className="note">
        <p>Note: The price includes the crew setting up your tent</p>
      </div>

      <article className="add-ons_cart_content">
        <article className="two-person_ui">
          <div className="tent_name">
            <p>2 person</p>
            <p>Tent</p>
          </div>
          <div className="tent_ui">
            <button onClick={removeTwoTent}>-</button>
            <span className="amount">{twoPersonTent}</span>
            <button onClick={addTwoTent}>+</button>
          </div>

          <div className="tent_total">
            <p>{totalTwoTent} kr.</p>
          </div>
        </article>

        <article className="three-person_ui">
          <div className="tent_name">
            <p>3 person</p>
            <p>Tent</p>
          </div>
          <div className="tent_ui">
            <button onClick={removeThreeTent}>-</button>
            <span className="amount">{threePersonTent}</span>
            <button onClick={addThreeTent}>+</button>
          </div>

          <div className="tent_total">
            <p>{totalThreeTent} kr.</p>
          </div>
        </article>
        <article className="green_camping_ui">
          <div className="green_name">
            <p>Green camping</p>
            <p>Option to help change the world</p>
          </div>
          <div className="green_ui">
            <input onChange={includeGreenOption} type="checkbox" className="green-option_check"></input>
          </div>
          <div className="green_total">
            <p>249 kr.</p>
          </div>
        </article>
      </article>
      <article className="total_bar">
        <p>Total ({totalItems} items)</p>
        <p className="total_price">{totalPrice} kr.</p>
      </article>
      <div className="continue_btn">
        <button>Continue</button>
      </div>
    </section>
  );
}
