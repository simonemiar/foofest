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
      case "monday":
        props.setMidgardFilter(schedule.Midgard.mon);
        props.setJotunFilter(schedule.Jotunheim.mon);
        props.setVanaFilter(schedule.Vanaheim.mon);
        setDay("monday");
        break;
      case "tuesday":
        props.setMidgardFilter(schedule.Midgard.tue);
        props.setJotunFilter(schedule.Jotunheim.tue);
        props.setVanaFilter(schedule.Vanaheim.tue);
        setDay("tuesday");
        break;
      case "wednesday":
        props.setMidgardFilter(schedule.Midgard.wed);
        props.setJotunFilter(schedule.Jotunheim.wed);
        props.setVanaFilter(schedule.Vanaheim.wed);
        setDay("wednesday");
        break;
      case "thursday":
        props.setMidgardFilter(schedule.Midgard.thu);
        props.setJotunFilter(schedule.Jotunheim.thu);
        props.setVanaFilter(schedule.Vanaheim.thu);
        setDay("thursday");
        break;
      case "friday":
        props.setMidgardFilter(schedule.Midgard.fri);
        props.setJotunFilter(schedule.Jotunheim.fri);
        props.setVanaFilter(schedule.Vanaheim.fri);
        setDay("friday");
        break;
      case "saturday":
        props.setMidgardFilter(schedule.Midgard.sat);
        props.setJotunFilter(schedule.Jotunheim.sat);
        props.setVanaFilter(schedule.Vanaheim.sat);
        setDay("saturday");
        break;
      case "sunday":
        props.setMidgardFilter(schedule.Midgard.sun);
        props.setJotunFilter(schedule.Jotunheim.sun);
        props.setVanaFilter(schedule.Vanaheim.sun);
        setDay("sunday");
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
      <section id="schedule_section">
        <h2
          id="schedule_date"
          onClick={() => {
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
