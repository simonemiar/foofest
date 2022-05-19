import Ticket from "../../Ticket";

export default function Tickets() {
  return (
    <main>
      <h2>Pick your ticket!</h2>
      <section id="ticket_container">
        <Ticket />
        <Ticket />
      </section>
    </main>
  );
}
