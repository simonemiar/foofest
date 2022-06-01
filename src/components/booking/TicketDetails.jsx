import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CampingArea from "../booking/CampingArea";
import TicketCart from "../booking/TicketCart";
import AddOnesCart from "../booking/AddOnesCart";
import TicketInBasket from "./TicketInBasket";
import { TicketBasketContext } from "../../contexts/TicketBasketContext";

export default function TicketDetails(props) {
  const { setTicketBasket } = useContext(TicketBasketContext);
  const [reserveSpotObj, setReserveSpotObj] = useState([]);

  function reserveSpot() {
    console.log();
    if (reserveSpotObj.length === 0) {
      alert("You need to pick a camping area");
    } else {
      props.toggleComponentsArr.setToggleTicketDetails(false);
      props.toggleComponentsArr.setTogglePersonInfo(true);
      props.setIsCurrent(props.isCurrent + 1);

      fetch("https://prototype-masters-foofest.herokuapp.com/reserve-spot", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: reserveSpotObj,
      })
        .then((res) => {
          res.json().then((data) => {
            // data.error ? alert("There is not spots enough") : alert("Spots is reserved");
            console.log(data);
            setTicketBasket((old) => {
              return {
                ...old,
                reserveSpotId: data.id,
              };
            });
          });
        })
        // .then((data) => console.log(data))
        .catch((err) => console.error(err));
    }
  }

  return (
    <section id="ticket_details">
      <h2 className="heading">Ticket details</h2>
      <section className="img_cart_container">
        <div className="ticket_img">
          <TicketInBasket />
        </div>
        <TicketCart />
      </section>
      <CampingArea setReserveSpotObj={setReserveSpotObj} />
      <AddOnesCart />

      <div className="booking_flow_nav">
        <Link to="/tickets">
          <button className="back_btn shape">Back</button>
        </Link>
        <button
          className="continue_btn shape"
          onClick={() => {
            reserveSpot();
          }}
        >
          Continue
        </button>
      </div>
    </section>
  );
}
