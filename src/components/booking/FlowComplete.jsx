import { Link } from "react-router-dom";

export default function FlowComplete(props) {
  // { setToggleTicketDetails, setTogglePersonInfo }
  console.log(props);
  return (
    <section id="ticket_details">
      <h2>Thank for buy a ticket</h2>

      <Link to="/">
        <button className="shape">Frontpage</button>
      </Link>
      <Link to="/schedule">
        <button className="shape">See schedule</button>
      </Link>
    </section>
  );
}
