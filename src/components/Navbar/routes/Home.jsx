import { Link } from "react-router-dom";
import stageImg from "../../../assets/svg/stage_icon.svg";

export default function Home() {
  return (
    <main id="home">
      <section id="header_section">
        <article className="section_wrapper">
          <article className="headings">
            <h1>FOO</h1>
            <h2>JAZZ</h2>
            <h2>FESTIVAL</h2>
          </article>
          <div className="nav_btn">
            <Link to="/schedule">
              <button className="schedule-btn">Schedule</button>
            </Link>

            <Link to="/tickets">
              <button className="booking-btn">Booking</button>
            </Link>
          </div>
        </article>
      </section>

      <section id="intro_section">
        <article id="intro_text">
          <h2>WHAT IS FOO?</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aliquid nisi est, voluptas consequatur delectus consequuntur, laborum harum, quae officiis in ab corporis! Ipsa quam, tempore similique dolores a fugiat
            consequuntur eligendi saepe molestiae amet obcaecati quo deleniti alias ut!
          </p>
        </article>

        <article id="intro_img">
          <div></div>
        </article>
      </section>

      <section id="stages_section">
        <h2>STAGES</h2>
        <article id="stages_container">
          <div className="stage">
            <h3>MIDGARD</h3>
            <div className="stage_img">
              <img className="stage_icon" src={stageImg} alt={stageImg} />
            </div>
            <p>Lorem ipsum dolor sit amet, ex tation labitur percipit vix. Cum et vero rebum, nihil reprehendunt te nec. Inani zril similique duo ut, ut mazim primis vel, hinc voluptatibus cu ne</p>
          </div>
          <div className="stage">
            <h3>VANEHEIM</h3>
            <div className="stage_img">
              <img className="stage_icon" src={stageImg} alt={stageImg} />
            </div>
            <p>Lorem ipsum dolor sit amet, ex tation labitur percipit vix. Cum et vero rebum, nihil reprehendunt te nec. Inani zril similique duo ut, ut mazim primis vel, hinc voluptatibus cu ne</p>
          </div>
          <div className="stage">
            <h3>JOTUNHEIM</h3>
            <div className="stage_img">
              <img className="stage_icon" src={stageImg} alt={stageImg} />
            </div>
            <p>Lorem ipsum dolor sit amet, ex tation labitur percipit vix. Cum et vero rebum, nihil reprehendunt te nec. Inani zril similique duo ut, ut mazim primis vel, hinc voluptatibus cu ne</p>
          </div>
        </article>
      </section>
    </main>
  );
}
