import { useState, useEffect, useContext } from "react";
import ScheduleDetails from "../../schedule/ScheduleDetails";
import { ScheduleContext } from "../../../contexts/ScheduleContext";

export default function Schedule() {
  const { setSchedule } = useContext(ScheduleContext);
  // const [schedule, setSchedule] = useState([]);
  const [midgardFilter, setMidgardFilter] = useState([]);
  const [jotunFilter, setJotunFilter] = useState([]);
  const [vanaFilter, setVanaFilter] = useState([]);

  // Here are we fetching the schedule data form the API, and setting the states of the schedule array.
  // We also filter the schedule array to only show the events that are in the current day.
  useEffect(() => {
    async function getSchedule() {
      const resSchedule = await fetch("https://prototype-masters-foofest.herokuapp.com/schedule");
      const scheduleData = await resSchedule.json();
      setSchedule(scheduleData);
      setMidgardFilter(scheduleData.Midgard.mon);
      setJotunFilter(scheduleData.Jotunheim.mon);
      setVanaFilter(scheduleData.Vanaheim.mon);
    }
    getSchedule();
  }, [setSchedule]);

  // Here are making a array so we can map over them.
  const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

  return (
    <>
      <main>
        <section className="schedule_header">
          <h1>Schedule</h1>
          <p>
            Get a overview over the bands, and which stages there are playing on.<br></br>
            Our 3 stages is Midgard, Jotunheim and Vanaheim
          </p>
        </section>
        {/* Now to days are being mapped, and we are prop drilling all the states, the day and schedule data */}
        {days.map((daySchedule) => (
          <ScheduleDetails
            key={Math.random()}
            daySchedule={daySchedule}
            midgardFilter={midgardFilter}
            jotunFilter={jotunFilter}
            vanaFilter={vanaFilter}
            setMidgardFilter={setMidgardFilter}
            setJotunFilter={setJotunFilter}
            setVanaFilter={setVanaFilter}
          />
        ))}
      </main>
    </>
  );
}
