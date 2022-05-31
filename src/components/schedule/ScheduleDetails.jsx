import { useEffect, useState } from "react";

import Act from "./Act";
import BandDetails from "./BandDetails";

export default function ScheduleDetails(props) {
  const [showSchedule, setScheduleMore] = useState(false);
  const [day, setDay] = useState("monday");

  const [showBandDetails, setShowBandDetails] = useState(false);
  const [holdShowBandDetails, setHoldShowBandDetails] = useState([]);
  const [band, setBand] = useState([]);
  const [stage, setStage] = useState("Midgard");
  const [act, setAct] = useState([]);

  useEffect(() => {
    async function get() {
      const res = await fetch("https://prototype-masters-foofest.herokuapp.com/bands");
      const data = await res.json();
      setBand(data);
    }
    get();
  }, []);

  function findBandDetails(act) {
    const idx = band.findIndex((band) => band.name === act.act);
    setHoldShowBandDetails(band[idx]);
    setAct(act);
    setShowBandDetails(true);
  }

  function filterByDay() {
    switch (props.daySchedule) {
      case "monday":
        props.setMidgardFilter(props.schedule.Midgard.mon);
        props.setJotunFilter(props.schedule.Jotunheim.mon);
        props.setVanaFilter(props.schedule.Vanaheim.mon);
        setDay("monday");
        break;
      case "tuesday":
        props.setMidgardFilter(props.schedule.Midgard.tue);
        props.setJotunFilter(props.schedule.Jotunheim.tue);
        props.setVanaFilter(props.schedule.Vanaheim.tue);
        setDay("tuesday");
        break;
      case "wednesday":
        props.setMidgardFilter(props.schedule.Midgard.wed);
        props.setJotunFilter(props.schedule.Jotunheim.wed);
        props.setVanaFilter(props.schedule.Vanaheim.wed);
        setDay("wednesday");
        break;
      case "thursday":
        props.setMidgardFilter(props.schedule.Midgard.thu);
        props.setJotunFilter(props.schedule.Jotunheim.thu);
        props.setVanaFilter(props.schedule.Vanaheim.thu);
        setDay("thursday");
        break;
      case "friday":
        props.setMidgardFilter(props.schedule.Midgard.fri);
        props.setJotunFilter(props.schedule.Jotunheim.fri);
        props.setVanaFilter(props.schedule.Vanaheim.fri);
        setDay("friday");
        break;
      case "saturday":
        props.setMidgardFilter(props.schedule.Midgard.sat);
        props.setJotunFilter(props.schedule.Jotunheim.sat);
        props.setVanaFilter(props.schedule.Vanaheim.sat);
        setDay("saturday");
        break;
      case "sunday":
        props.setMidgardFilter(props.schedule.Midgard.sun);
        props.setJotunFilter(props.schedule.Jotunheim.sun);
        props.setVanaFilter(props.schedule.Vanaheim.sun);
        setDay("sunday");
        break;
      default:
        console.log("no match");
    }

    // if (props.daySchedule === "monday") {
    //   props.setMidgardFilter(props.schedule.Midgard.mon);
    //   props.setJotunFilter(props.schedule.Jotunheim.mon);
    //   props.setVanaFilter(props.schedule.Vanaheim.mon);
    //   setDay("monday");
    // } else if (props.daySchedule === "tuesday") {
    //   props.setMidgardFilter(props.schedule.Midgard.tue);
    //   props.setJotunFilter(props.schedule.Jotunheim.tue);
    //   props.setVanaFilter(props.schedule.Vanaheim.tue);
    //   setDay("tuesday");
    // } else if (props.daySchedule === "wednesday") {
    //   props.setMidgardFilter(props.schedule.Midgard.wed);
    //   props.setJotunFilter(props.schedule.Jotunheim.wed);
    //   props.setVanaFilter(props.schedule.Vanaheim.wed);
    //   setDay("wednesday");
    // } else if (props.daySchedule === "thursday") {
    //   props.setMidgardFilter(props.schedule.Midgard.thu);
    //   props.setJotunFilter(props.schedule.Jotunheim.thu);
    //   props.setVanaFilter(props.schedule.Vanaheim.thu);
    //   setDay("thursday");
    // } else if (props.daySchedule === "friday") {
    //   props.setMidgardFilter(props.schedule.Midgard.fri);
    //   props.setJotunFilter(props.schedule.Jotunheim.fri);
    //   props.setVanaFilter(props.schedule.Vanaheim.fri);
    //   setDay("friday");
    // } else if (props.daySchedule === "saturday") {
    //   props.setMidgardFilter(props.schedule.Midgard.sat);
    //   props.setJotunFilter(props.schedule.Jotunheim.sat);
    //   props.setVanaFilter(props.schedule.Vanaheim.sat);
    //   setDay("saturday");
    // } else if (props.daySchedule === "sunday") {
    //   props.setMidgardFilter(props.schedule.Midgard.sun);
    //   props.setJotunFilter(props.schedule.Jotunheim.sun);
    //   props.setVanaFilter(props.schedule.Vanaheim.sun);
    //   setDay("sunday");
    // }
  }

  return (
    <>
      <section id="schedule_section">
        <h2
          id="schedule_date"
          onClick={() => {
            setScheduleMore((old) => !old);
            filterByDay(props.daySchedule);
          }}
        >
          {props.daySchedule}
        </h2>
        <article id="details_section" style={{ display: showSchedule ? "block" : "none" }}>
          <table>
            <thead>
              <tr>
                <th>TIME KL: </th>
                <th className="stage">MIDGARD</th>
                <th className="stage">JOTUNHEIM</th>
                <th className="stage">VANEHEIM</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td className="time_border">00:00</td>
                <td className="time_border">01:00</td>
                <td className="time_border">02:00</td>
                <td className="time_border">03:00</td>
                <td className="time_border">04:00</td>
                <td className="time_border">05:00</td>
                <td className="time_border">06:00</td>
                <td className="time_border">07:00</td>
                <td className="time_border">08:00</td>
                <td className="time_border">09:00</td>
                <td className="time_border">10:00</td>
                <td className="time_border">11:00</td>
                <td className="time_border">12:00</td>
                <td className="time_border">13:00</td>
                <td className="time_border">14:00</td>
                <td className="time_border">15:00</td>
                <td className="time_border">16:00</td>
                <td className="time_border">17:00</td>
                <td className="time_border">18:00</td>
                <td className="time_border">19:00</td>
                <td className="time_border">20:00</td>
                <td className="time_border">21:00</td>
                <td className="time_border">22:00</td>
                <td className="time_border">23:00</td>
              </tr> */}
              {props.midgardFilter.map((act, index) => {
                const mAct = act;
                const jAct = props.jotunFilter[index];
                const vAct = props.vanaFilter[index];

                return (
                  <Act
                    key={Math.random()}
                    act={act}
                    mAct={mAct}
                    jAct={jAct}
                    vAct={vAct}
                    day={day}
                    setStage={setStage}
                    findBandDetails={findBandDetails}
                  />
                );
              })}
            </tbody>
          </table>
        </article>
        <BandDetails
          bandDisplay={props.bandDisplay}
          setBandDisplayed={props.setBandDisplayed}
          // favourites={props.favourites}
          // setFavourites={props.setFavourites}
          act={act}
          stage={stage}
          setHoldShowBandDetails={setHoldShowBandDetails}
          holdShowBandDetails={holdShowBandDetails}
          showBandDetails={showBandDetails}
          setShowBandDetails={setShowBandDetails}
        ></BandDetails>
      </section>

      {/*------------------------------------------------*/}

      {/* <button id="details_button" onClick={() => setScheduleMore((old) => !old)}> */}
      {/* monday */}
      {/* {day} */}

      {/* </button> */}
      {/* <p>{schedule.Midgard.mon[0].act}</p> */}
      {/* <p>
          {schedule.map((stage) => (
            <BandInfo key={Math.random()} stage={stage} />
          ))}
        </p> */}

      {/* <section id="details_section" style={{ display: showSchedule ? "block" : "none" }}> */}
      {/* {<BandInfo />} */}
      {/* <p>
          {Object.values(schedule).map((stage) => (
            <BandInfo key={Math.random()} stage={stage} />
          ))}
        </p> */}

      {/* FAKE TABLE FOR TEST AND CSS */}

      {/* <table>
          <thead>
            <tr>
              <th>TIME KL:</th>
              <td className="time_border">00:00</td>
              <td className="time_border">01:00</td>
              <td className="time_border">02:00</td>
              <td className="time_border">03:00</td>
              <td className="time_border">04:00</td>
              <td className="time_border">05:00</td>
              <td className="time_border">06:00</td>
              <td className="time_border">07:00</td>
              <td className="time_border">08:00</td>
              <td className="time_border">09:00</td>
              <td className="time_border">10:00</td>
              <td className="time_border">11:00</td>
              <td className="time_border">12:00</td>
              <td className="time_border">13:00</td>
              <td className="time_border">14:00</td>
              <td className="time_border">15:00</td>
              <td className="time_border">16:00</td>
              <td className="time_border">17:00</td>
              <td className="time_border">18:00</td>
              <td className="time_border">19:00</td>
              <td className="time_border">20:00</td>
              <td className="time_border">21:00</td>
              <td className="time_border">22:00</td>
              <td className="time_border">23:00</td>
            </tr>
            <tr>
              <th className="stage">MIDGARD</th>
              <td className="artist">{<BandInfo />}</td>
              <td className="artist">The Obelisks</td>
              <td className="artist">The What</td>
            </tr>
            <tr>
              <th className="stage">JOTUNHEIM</th>
              <td className="artist">Main Hall</td>
              <td className="artist">West Wing</td>
              <td className="artist">Main Hall</td>
              <td className="artist">West Wing</td>
              <td className="artist">West Wing</td>
              <td className="artist">West Wing</td>
              <td className="artist">West Wing</td>
            </tr>
            <tr>
              <th className="stage">VANEHEIM</th>
              <td className="artist">Main Hall</td>
              <td className="artist">West Wing</td>
              <td className="artist">Main Hall</td>
            </tr>
          </thead>
        </table> */}

      {/* Below is codesnippet for getting data into the table */}
      {/* <table>
      <thead>
        <tr>
          <th></th>
          {timeData.map((i) => (
            <th scope="col">time #{i}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {stageData.map((key) => (
          <tr key={key}>
            <th scope="row">{key}</th>
            {timeData.map((i) => (
              <td>{getValue(i, key)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table> */}
      {/* </section> */}
    </>
  );
}
