import { Link } from "react-router-dom";
import StagePiano from "../../../../src/assets/svg/piano_1.svg";
import StageTrumpet from "../../../../src/assets/svg/trumpet_1.svg";
import StageBas from "../../../../src/assets/svg/bas_1.svg";
import Map from "../../../../src/assets/svg/map.svg";

import Piano from "../../../../src/assets/svg/piano.svg";
import Trumpet from "../../../../src/assets/svg/trumpet.svg";
import Node from "../../../../src/assets/svg/node.svg";
import Saxophone from "../../../../src/assets/svg/saxophone.svg";
import Bas from "../../../../src/assets/svg/bas.svg";

export default function Home() {
  return (
    <main id="home">
      <section id="home_background">
        <img src={Piano} alt={Piano} />
        <img src={Trumpet} alt={Trumpet} />
        <img src={Node} alt={Node} />
        <img src={Saxophone} alt={Saxophone} />
        <img src={Bas} alt={Bas} />
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
      </section>

      <section id="intro_section">
        <article id="intro_text">
          <h2>WHAT IS FOO FESTIVAL?</h2>

          <p>
            Foo Festival tager Jazzmusikken retur på dagsordnen og lader den
            udfolde og eksperimentere i et gådefuldt miljø. Her får den brede
            musikstil, som bliver præget af kompleks harmoni, synkoperede rytmer
            og stor vægt på improvisation, mulighed for at at skabe et kulturelt
            miljø, hvor der er plads til alt det vi elsker ved genren jazz, men
            også at afprøve ens nysgerrighed for andre undergenre af jazzen.
            udover fokus på musikken, så vægter fællesskabet, bæredygtigheden,
            samtalerne og oplevelsen af at mennesker mødes også utroligt højt
            hos Foo Festival .
          </p>
        </article>

        <article id="intro_img">
          <img src={Map} alt={Map} />
        </article>
      </section>

      <section id="stages_section">
        <h2>STAGES</h2>
        <article id="stages_container">
          <div className="stage">
            <h3>MIDGARD</h3>
            <div className="stage_img">
              <img className="stage_icon" src={StagePiano} alt={StagePiano} />
            </div>
            <p>
              Midgard is the focal point of the Foo Festival and is also the
              biggest stage. This is where the bigger national and international
              names appear, so the genre itself may well change a lot in the
              course of a day. Stage can accommodate 23,000 audiences. Here,
              genre ranges from classical Trad jazz, New Orleans jazz & Early
              jazz to more modern and newer genres.
            </p>
          </div>
          <div className="stage">
            <h3>VANEHEIM</h3>
            <div className="stage_img">
              <img
                className="stage_icon"
                src={StageTrumpet}
                alt={StageTrumpet}
              />
            </div>
            <p>
              Vaneheim is the festival's second largest stage. The stage has
              room for 16,000 spectators, here the focus is on diversity which
              adds up to a dance or two. Often this is where you can experience
              swing music and more big band Jazz.
            </p>
          </div>
          <div className="stage">
            <h3>JOTUNHEIM</h3>
            <div className="stage_img">
              <img className="stage_icon" src={StageBas} alt={StageBas} />
            </div>
            <p>
              Is our smallest stage, with the possibility of 5,000 spectators.
              The stage is intended for a more intimate audience in enigmatic
              surroundings. We see Jotunheim as the most experimental scene.
              Here you can meet everything from erratic free jazz and Avant
              garde, to Modern / Contemporary Jazz.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
