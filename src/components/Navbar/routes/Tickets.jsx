import Ticket from "../../booking/Ticket";

export default function Tickets() {
  return (
    <main>
      <section id="ticket_container">
        <h2 className="heading">Pick your ticket!</h2>
        <section id="tickets">
          <Ticket ticketType="Regular" ticketPrice="799" />
          <Ticket ticketType="VIP" ticketPrice="1299" />
        </section>
      </section>
    </main>
  );
}
