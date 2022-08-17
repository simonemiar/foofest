import { useEffect, useState, useContext } from "react";

import Act from "./Act";
import { BandDataContext } from "../../contexts/BandDataContext";
import { ScheduleContext } from "../../contexts/ScheduleContext";

export default function ScheduleDetails(props) {

  const { setBandData } = useContext(BandDataContext);
  const { schedule } = useContext(ScheduleContext);

  const [showScheduleMore, setShowScheduleMore] = useState(false);
  const [day, setDay] = useState("monday");

  // Here we are fetcting the band data form the API, and setting the states of the band array.
  useEffect(() => {
    async function get() {
      const res = await fetch("https://prototype-masters-foofest.herokuapp.com/bands");
      const data = await res.json();

      // Adding a id to each band, so we can use it to find the band details.
      const addIdToBand = data.map((old) => {
        return { ...old, id: old.name.trim().replace(/\s/g, "-").toLowerCase() };
      });

      setBandData(addIdToBand);
    }
    get();
  }, [setBandData]);

  // Here we are setting the filter by the day clicked
  function filterByDay() {
    switch (props.daySchedule) {
      case "Monday":
        props.setMidgardFilter(props.schedule.Midgard.mon);
        props.setJotunFilter(props.schedule.Jotunheim.mon);
        props.setVanaFilter(props.schedule.Vanaheim.mon);
        setDay("Monday");
        break;
      case "Tuesday":
        props.setMidgardFilter(props.schedule.Midgard.tue);
        props.setJotunFilter(props.schedule.Jotunheim.tue);
        props.setVanaFilter(props.schedule.Vanaheim.tue);
        setDay("Tuesday");
        break;
      case "Wednesday":
        props.setMidgardFilter(props.schedule.Midgard.wed);
        props.setJotunFilter(props.schedule.Jotunheim.wed);
        props.setVanaFilter(props.schedule.Vanaheim.wed);
        setDay("Wednesday");
        break;
      case "Thursday":
        props.setMidgardFilter(props.schedule.Midgard.thu);
        props.setJotunFilter(props.schedule.Jotunheim.thu);
        props.setVanaFilter(props.schedule.Vanaheim.thu);
        setDay("Thursday");
        break;
      case "Friday":
        props.setMidgardFilter(props.schedule.Midgard.fri);
        props.setJotunFilter(props.schedule.Jotunheim.fri);
        props.setVanaFilter(props.schedule.Vanaheim.fri);
        setDay("Friday");
        break;
      case "Saturday":
        props.setMidgardFilter(props.schedule.Midgard.sat);
        props.setJotunFilter(props.schedule.Jotunheim.sat);
        props.setVanaFilter(props.schedule.Vanaheim.sat);
        setDay("Saturday");
        break;
      case "Sunday":
        props.setMidgardFilter(props.schedule.Midgard.sun);
        props.setJotunFilter(props.schedule.Jotunheim.sun);
        props.setVanaFilter(props.schedule.Vanaheim.sun);
        setDay("Sunday");
        
        break;
      default:
        console.log("no match");
    }
  }

  const stageNames = {
    midgard: "Mid",
    jotunheim: "Jot",
    vanaheim: "Van",
    // midgard: "Midgard",
    // jotunheim: "Jotunheim",
    // vanaheim: "Vanaheim",
  };

  return (
    <>
      <section className="schedule_section">
        <h2
          className={`schedule_date ${props.clicked === props.index ? "selected" : ""}`}
          onClick={() => {
            props.toggle(props.index);

            filterByDay(props.daySchedule);
          }}
        >
          {props.daySchedule}
        </h2>

        {props.clicked === props.index ? (
          <article className={`details_section ${props.clicked === props.index ? "open" : "close"}`}>
            <table>
              <thead>
                <tr>
                  <th className="time">TIME</th>
                <th className="stage">{stageNames.midgard}</th>
                <th className="stage">{stageNames.jotunheim}</th>
                <th className="stage">{stageNames.vanaheim}</th>
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
                  <tr key={Math.random()} className="artists">
                    <th>
                      {act.start}-{act.end}
                    </th>
                    <Act act={act} sceneAct={mAct} day={day} stage="Midgard" />

                    <Act act={act} sceneAct={jAct} day={day} stage="Jotunheim" />

                    <Act act={act} sceneAct={vAct} day={day} stage="Vanaheim" />
                  </tr>
                );
              })}
            </tbody>
          </table>
        </article>
      </section>
    </>
  );
}
