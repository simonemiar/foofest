export default function AddOnesCart() {
  return (
    <section id="add-ons_cart">
      <div id="top">
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
            <button>-</button>
            <span className="tent-two_amount">0</span>
            <button>+</button>
          </div>

          <div className="two-person_total">
            <p>299 kr.</p>
          </div>
        </article>

        <article className="three-person_ui">
          <div className="tent_name">
            <p>2 person</p>
            <p>Tent</p>
          </div>
          <div className="tent_ui">
            <button>-</button>
            <span className="tent-three_amount">0</span>
            <button>+</button>
          </div>

          <div className="three-person_total">
            <p>299 kr.</p>
          </div>
        </article>
        <article className="green_camping_ui">
          <div className="green_name">
            <p>Green camping</p>
            <p>Option to help change the world</p>
          </div>
          <div className="green_ui">
            <input type="checkbox" name="green-option" />
          </div>
          <div className="green_total">
            <p>249 kr.</p>
          </div>
        </article>
      </article>
    </section>
  );
}
