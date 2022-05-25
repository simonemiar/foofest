export default function PersonForm(props) {
  return (
    <>
      <fieldset>
        <legend>Person {props.details.number}</legend>
        {/* <div className={"fullname" + props.ticket}>
          <label htmlFor={"fullname" + props.ticket} required>
            Fullname
          </label>
          <input type="text" id={"fullname" + props.ticket} />
        </div> */}
        <div className="fullname">
          <label htmlFor="fullname" required>
            Fullname
          </label>
          <input type="text" id="fullname" />
        </div>
        <div className="email">
          <label htmlFor="email" required>
            E-mail
          </label>
          <input type="email" id="email" inputMode="email" />
        </div>
        {/*<div className="full_phone">
          <div className="phone_code">
            <label htmlFor="phone_code">Code</label>
            <select name="phone_code" id="phone_code">
              <option value="45">+45</option>
              <option value="47">+47</option>
              <option value="00">+00</option>
            </select>
          </div>
          <div className="phone_num">
            <label htmlFor="phone_num" required>
              Phone number
            </label>
            <input type="tel" id="phone_num" inputMode="tel" pattern="[0-9]+" maxLength="8" />
          </div>
        </div>
        <div className="street">
          <label htmlFor="street" required>
            Street
          </label>
          <input type="text" id="street" />
        </div>
        <div className="zip_city">
          <div className="zip_code">
            <label htmlFor="zip_code">Code</label>
            <input
              type="text"
              id="zip_code"
              inputMode="numeric"
              pattern="[0-9]+"
              maxLength="4"
              required
            />
          </div>
          <div className="city">
            <label htmlFor="city" required>
              City
            </label>
            <input type="text" id="city" />
          </div>
        </div>
        <div className="country">
          <label htmlFor="country" required>
            Country
          </label>
          <input type="text" id="country" />
        </div> */}
      </fieldset>
    </>
  );
}
