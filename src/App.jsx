import "./App.css";
import "./scss/style.scss";
import Header from "./components/Header";
import Ticket from "./components/Ticket";
import PersonForm from "./components/PersonForm";

function App() {
  return (
    <div className="App">
      <Header />
      <p>Johnny</p>
      <section id="ticket_container">
        <Ticket />
        <Ticket />
      </section>
      <PersonForm />
    </div>
  );
}

export default App;
