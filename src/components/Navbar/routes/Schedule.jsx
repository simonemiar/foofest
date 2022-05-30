import { useState, useEffect } from "react";
import ScheduleDetails from "../../schedule/ScheduleDetails";

export default function Schedule() {
  const [schedule, setSchedule] = useState([]);
  const [midgardFilter, setMidgardFilter] = useState([]);
  const [jotunFilter, setJotunFilter] = useState([]);
  const [vanaFilter, setVanaFilter] = useState([]);

  // Fetching schedule:
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
  }, []);

  const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

  return (
    <>
      <h1>Schedule</h1>
      {days.map((daySchedule) => (
        <ScheduleDetails
          key={Math.random()}
          schedule={schedule}
          daySchedule={daySchedule}
          midgardFilter={midgardFilter}
          jotunFilter={jotunFilter}
          vanaFilter={vanaFilter}
          setMidgardFilter={setMidgardFilter}
          setJotunFilter={setJotunFilter}
          setVanaFilter={setVanaFilter}
        />
      ))}
    </>
  );
}
