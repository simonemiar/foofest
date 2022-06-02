import { useEffect, useState } from "react";

import Act from "./Act";
import BandDetails from "./BandDetails";

export default function ScheduleDetails(props) {
  const [showScheduleMore, setShowScheduleMore] = useState(false);
  const [day, setDay] = useState("monday");

  const [showBandDetails, setShowBandDetails] = useState(false);
  const [holdShowBandDetails, setHoldShowBandDetails] = useState([]);
  const [band, setBand] = useState([]);
  const [stage, setStage] = useState("Midgard");
  const [act, setAct] = useState([]);

  // Here we are fetcting the band data form the API, and setting the states of the band array.
  useEffect(() => {
    async function get() {
      const res = await fetch("https://prototype-masters-foofest.herokuapp.com/bands");
      const data = await res.json();
      setBand(data);
    }
    get();
  }, []);

  // Here we are taking the band data and comparing the band name vs the act, to find the right index in the array.
  // Then we are setting the HoldShowBandDetails state to the correct band by the index.
  function findBandDetails(act) {
    const idx = band.findIndex((band) => band.name === act.act);
    setHoldShowBandDetails(band[idx]);
    setAct(act);
    setShowBandDetails(true);
  }

  // Here we are setting the filter by the day clicked
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
            console.log("You Clicked");
            if (showScheduleMore === false) {
            }
            setShowScheduleMore((old) => !old);
            filterByDay(props.daySchedule);
          }}
        >
          {props.daySchedule}
        </h2>
        <article id="details_section" style={{ display: showScheduleMore ? "block" : "none" }}>
          <table>
            <thead>
              <tr>
                <th>TIME KL: </th>
              </tr>
              <tr>
                <th className="stage">MIDGARD</th>
                <th className="stage">JOTUNHEIM</th>
                <th className="stage">VANEHEIM</th>
              </tr>
            </thead>
            <tbody>
              {/* Here we are taking the midgardFilter and mapping it and taking the parameters act and index
              Then we are making 3 variables, there is holding the filter by each scene and the index of the scene.
              */}
              {props.midgardFilter.map((act, index) => {
                const mAct = act;
                const jAct = props.jotunFilter[index];
                const vAct = props.vanaFilter[index];

                return (
                  // There are we are making a table row with the time and the 3 scenes
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
        {/* Here are the BandDetails, and if the showBandDetails value it ture, it will be shown */}
        <BandDetails
          bandDisplay={props.bandDisplay}
          setBandDisplayed={props.setBandDisplayed}
          act={act}
          stage={stage}
          setHoldShowBandDetails={setHoldShowBandDetails}
          holdShowBandDetails={holdShowBandDetails}
          showBandDetails={showBandDetails}
          setShowBandDetails={setShowBandDetails}
        ></BandDetails>
      </section>
    </>
  );
}
