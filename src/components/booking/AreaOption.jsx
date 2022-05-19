import { useContext } from "react";
import { TicketBasketContext } from "../../contexts/TicketBasketContext";

export default function AreaOption(props) {
  const { setTicketBasket } = useContext(TicketBasketContext);

  let isTrue = false;

  function handleOnChange(e) {
    const selectedOption = e.target.value;
    console.log("selected camping option is:", selectedOption);
    if (props.spot.available === 0) {
      isTrue = true;
      alert(`There are no more spots available on ${props.spot.area}`);
    } else {
      setTicketBasket((old) => {
        return {
          ...old,
          campingArea: e.target.value,
        };
      });
    }
  }

  return (
    <div className="option">
      <input
        type="radio"
        id={props.spot.area}
        name="area"
        value={props.spot.area}
        onChange={handleOnChange}
        disabled={isTrue}
      ></input>
      <label htmlFor={props.spot.area}>{props.spot.area}</label>
      <p className="spots_left">Spots left: {props.spot.available}</p>
    </div>
  );
}
