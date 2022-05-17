import PersonForm from "../components/PersonForm";

export default function TicketDetails(props) {
  return (
    <section id="person_info">
      <h2>Your personal information</h2>
      <PersonForm />
      <button
        className="back_btn shape"
        onClick={() => {
          props.toggleComponentsArr.setTogglePersonInfo(false);
          props.toggleComponentsArr.setToggleTicketDetails(true);
        }}
      >
        Back
      </button>
      <button
        className="continue_btn shape"
        onClick={() => {
          props.toggleComponentsArr.setTogglePersonInfo(false);
          props.toggleComponentsArr.setToggleBasketOverview(true);
        }}
      >
        Continue
      </button>
    </section>
  );
}
