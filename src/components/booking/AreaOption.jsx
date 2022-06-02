import { useContext } from "react";
import { TicketBasketContext } from "../../contexts/TicketBasketContext";

export default function AreaOption(props) {
  const { ticketBasket, setTicketBasket } = useContext(TicketBasketContext);

  function handleOnChange(e) {
    // console.log("Selected camping option is:", selectedOption);

    // Here are we taking the area value and amount and creating a object with the area and amount
    const area = e.target.value,
      amount = ticketBasket.ticketAmount;
    const reserveSpotRequset = { area, amount };
    // Here are we preparing the object to be sent to the server
    const putSpotRequset = JSON.stringify(reserveSpotRequset);
    props.setReserveSpotObj((old) => putSpotRequset);

    setTicketBasket((old) => {
      return {
        ...old,
        campingArea: e.target.value,
      };
    });
  }

  return (
    <>
      <div className="option">
        <input
          type="radio"
          id={props.spot.area}
          name="area"
          value={props.spot.area}
          onChange={handleOnChange}
          // Here are we checking if there is enough spots in the area.
          // And if there isnt we disable the radio button
          disabled={props.spot.available < ticketBasket.ticketAmount ? true : false}
        ></input>
        <label htmlFor={props.spot.area} className="bold">
          {props.spot.area}
        </label>
        <h4 className="spots_left">Spots left: {props.spot.available}</h4>
      </div>
    </>
  );
}
