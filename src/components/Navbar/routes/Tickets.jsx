import Ticket from "../../booking/Ticket";

export default function Tickets() {
  return (
    <main>
      <h2>Pick your ticket!</h2>
      <section id="ticket_container">
        <Ticket ticketType="Regular" ticketPrice="799" />
        <Ticket ticketType="VIP" ticketPrice="1299" />
      </section>
    </main>
  );
}
