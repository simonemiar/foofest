export default function PersonForm(props) {
  return (
    <>
      <fieldset data-person>
        <article className="person-number_container">
          <legend>Person {props.details}</legend>
        </article>
        <div className="fullname">
          <label htmlFor="fullname">Fullname</label>
          <input type="text" id="fullname" name="fullname" required />
        </div>
        <div className="email">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" inputMode="email" required />
        </div>
        <div className="full_phone">
          <div className="phone_code">
            <label htmlFor="phone_code">Code</label>
            <select name="phone_code" id="phone_code" required>
              <option value="45">+45</option>
              <option value="47">+47</option>
              <option value="00">+00</option>
            </select>
          </div>
          <div className="phone_num">
            <label htmlFor="phone_num">Phone number</label>
            <input type="tel" id="phone_num" name="phone_num" inputMode="tel" pattern="[0-9]+" maxLength="8" required />
          </div>
        </div>
        <div className="street">
          <label htmlFor="street">Street</label>
          <input type="text" id="street" name="street" required />
        </div>
        <div className="zip_city">
          <div className="zip_code">
            <label htmlFor="zip_code">Code</label>
            <input type="text" id="zip_code" name="zip_code" inputMode="numeric" pattern="[0-9]+" maxLength="4" required />
          </div>
          <div className="city">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" required />
          </div>
        </div>
        <div className="country">
          <label htmlFor="country">Country</label>
          <input type="text" id="country" name="country" required />
        </div>
      </fieldset>
    </>
  );
}
