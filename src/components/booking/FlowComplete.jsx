import { useState, useContext, useEffect } from "react";
import { TicketBasketContext } from "../../contexts/TicketBasketContext";
import { jsPDF } from "jspdf";
import orderIllustration from "../../assets/svg/confirmation.svg";
import fooFestLogo from "../../assets/img/foofest_logo_orange.png";

export default function FlowComplete(props) {
  const { ticketBasket } = useContext(TicketBasketContext);

  const ordernumber = Math.floor(Math.random() * 10000000 + 1);

  // Here are we setting if the tent is selected or not
  const [toggleTent2Person, setToggleTent2Person] = useState(false);
  const [toggleTent3Person, setToggleTent3Person] = useState(false);
  const [toggleGreenCamping, setToggleGreenCamping] = useState(false);

  // Here are we calculating the total tents, price and amount.
  const totalTicketPrize = ticketBasket.ticketPrice * ticketBasket.ticketAmount;
  const totalTwoTent =
    ticketBasket.tent2PersonPrice * ticketBasket.tent2PersonAmount;
  const totalThreeTent =
    ticketBasket.tent3PersonPrice * ticketBasket.tent3PersonAmount;

  const totalPrice =
    totalTwoTent +
    totalThreeTent +
    (ticketBasket.isGreenCamping ? ticketBasket.greenCamping : 0) +
    ticketBasket.ticketPrice * ticketBasket.ticketAmount +
    ticketBasket.bookingFee;

  const totalItems =
    ticketBasket.tent2PersonAmount +
    ticketBasket.tent3PersonAmount +
    ticketBasket.isGreenCamping +
    ticketBasket.ticketAmount;

  useEffect(() => {
    setToggleTent2Person(ticketBasket.tent2PersonAmount ? true : false);
    setToggleTent3Person(ticketBasket.tent3PersonAmount ? true : false);
    setToggleGreenCamping(ticketBasket.isGreenCamping ? true : false);
  }, [ticketBasket]);

  // Here are we creating the PDF with the data from the ticketBasket.
  function createPDF() {
    // Default export is a4 paper, portrait, using millimeters for units
    const doc = new jsPDF();

    // Header
    doc.setFontSize(22);
    doc.text(20, 20, "FooFest Jazz Festival");
    doc.addImage(fooFestLogo, "PNG", 180, 10, 20, 20);

    // Order confirmation
    doc.setFontSize(22);
    doc.text("Order confirmation", 100, 40, { align: "center" });
    // text(text, x, y, optionsopt, transform)

    // Ordernumber
    doc.setFontSize(16);
    doc.text("Ordernumber: " + ordernumber.toString(), 100, 50, {
      align: "center",
    });

    // Line
    doc.setLineWidth(1.5);
    doc.line(20, 55, 200, 55);

    // Headings
    doc.setFontSize(16);
    doc.setFont(undefined, "bold");
    doc.text("Item", 20, 65);
    doc.text("Quanity", 95, 65);
    doc.text("Price", 180, 65);

    doc.setFontSize(14);
    doc.setFont(undefined, "normal");

    // Items
    doc.text("Ticket " + ticketBasket.ticketType, 20, 75);
    doc.text("Booking fee", 20, 85);
    doc.text("2 person tents", 20, 95);
    doc.text("3 person tents", 20, 105);
    doc.text("Camping spot", 20, 115);
    doc.text("Green camping", 20, 125);

    // Quanity
    doc.text(ticketBasket.ticketAmount.toString(), 95, 75);
    doc.text(ticketBasket.tent2PersonAmount.toString(), 95, 95);
    doc.text(ticketBasket.tent3PersonAmount.toString(), 95, 105);
    doc.text(ticketBasket.campingArea.toString(), 95, 115);
    doc.text(ticketBasket.isGreenCamping.toString(), 95, 125);

    // Price
    doc.text(totalTicketPrize.toString() + " DKK", 180, 75);
    doc.text(ticketBasket.bookingFee.toString() + " DKK", 180, 85);
    doc.text(totalTwoTent.toString() + " DKK", 180, 95);
    doc.text(totalThreeTent.toString() + " DKK", 180, 105);
    doc.text("0 DKK", 180, 115);
    doc.text(ticketBasket.greenCamping.toString() + " DKK", 180, 125);

    // Line
    doc.setLineWidth(1.5);
    doc.line(20, 135, 200, 135);

    // Total price
    doc.setFontSize(16);
    doc.setFont(undefined, "bold");
    doc.text("Total", 160, 145);
    doc.setFont(undefined, "normal");

    doc.text(totalPrice.toString() + " DKK", 180, 145);

    doc.text("Remember to see the schedule!", 100, 155, { align: "center" });

    doc.save(`booking-confirmation-${ordernumber.toString()}.pdf`);
  }

  // { setToggleTicketDetails, setTogglePersonInfo }
  return (
    <section id="confirmation_page">
      <h2>Purchase confirmation</h2>
      <h3>Ordernumber: {ordernumber} </h3>

      <div className="illustration">
        <img src={orderIllustration} alt={orderIllustration} />
      </div>

      <div className="text_info">
        <h3>
          We’ve received your order, and you should recieve a confirmation
          e-mail any minute now.
        </h3>

        <p>Please view your order details below</p>
      </div>

      <div className="top-bar">
        <p>Ticket</p>
        <p>Quantity</p>
        <p>Price</p>
      </div>

      <section className="overview_content">
        <article className="ticket_row">
          <div className="ticket_name">
            <p id="ticket_type">{ticketBasket.ticketType}</p>
            <p>Ticket</p>
          </div>

          <div className="ticket_amount">
            <span id="amount_ticket">{ticketBasket.ticketAmount}</span>
          </div>
          <div className="ticket_price">
            <p className="total_ticket_price">
              <span className="bold">{totalTicketPrize} kr.</span>
            </p>
          </div>
        </article>

        {toggleTent2Person ? (
          <article className="tent_row">
            <div className="tent_name">
              <p>2 person</p>
              <p>Tent</p>
            </div>
            <div className="tent_ui">
              <span className="amount_ticket">
                {ticketBasket.tent2PersonAmount}
              </span>
            </div>
            <div className="tent_total">
              <p>
                {ticketBasket.tent2PersonAmount > 1
                  ? totalTwoTent
                  : ticketBasket.tent2PersonPrice}{" "}
                kr.
              </p>
            </div>
          </article>
        ) : null}

        {toggleTent3Person ? (
          <article className="tent_row">
            <div className="tent_name">
              <p>3 person</p>
              <p>Tent</p>
            </div>
            <div className="tent_ui">
              <span className="amount_ticket">
                {ticketBasket.tent3PersonAmount}
              </span>
            </div>
            <div className="tent_total">
              <p>
                {ticketBasket.tent3PersonAmount > 1
                  ? totalThreeTent
                  : ticketBasket.tent3PersonPrice}{" "}
                kr.
              </p>
            </div>
          </article>
        ) : null}

        {toggleGreenCamping ? (
          <article className="tent_row">
            <div className="green_name">
              <p>Green camping</p>
              <p>Option to help change the world</p>
            </div>

            <div className="green_total">
              <p>249 kr.</p>
            </div>
          </article>
        ) : null}

        <article className="fee_row">
          <div className="fee_name">
            <p>Booking fee</p>
          </div>

          <div className="fee_total">
            <p>{ticketBasket.bookingFee} kr.</p>
          </div>
        </article>
        <article className="total_bar">
          <p>
            Total ({totalItems} {totalItems > 1 ? "items" : "item"})
          </p>
          <p className="total_price">{totalPrice} kr.</p>
        </article>

        <button id="pdf_btn" onClick={createPDF}>
          Download your receipt
        </button>
      </section>
    </section>
  );
}
