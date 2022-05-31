export default function QuanityLine({ addTent, removeTent, ticketBasket, setTicketBasket, totalTent, tentPersonAmount, tentPersonPrice, title }) {
  return (
    <article className="tent_row">
      <div className="tent_name">
        <p className="bold">{title}</p>
        <p>Tent</p>
      </div>
      <div className="tent_ui">
        <button onClick={() => removeTent(ticketBasket, setTicketBasket)}>-</button>
        <span className="amount_ticket">{tentPersonAmount}</span>
        <button onClick={() => addTent(ticketBasket, setTicketBasket)}>+</button>
      </div>

      <div className="tent_total">
        <p>{tentPersonAmount > 1 ? totalTent : tentPersonPrice} kr.</p>
      </div>
    </article>
  );
}
