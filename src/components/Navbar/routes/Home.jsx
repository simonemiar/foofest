import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main id="home">
      <section id="intro_section">
        <article className="section_wrapper">
          <div className="headings">
            <h1>FooFest</h1>
            <h2>Jazz Festival</h2>
          </div>
          <div className="nav_btn">
            <Link to="/schedule">
              <button className="shape">Schedule</button>
            </Link>

            <Link to="/tickets">
              <button className="shape">Booking</button>
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
