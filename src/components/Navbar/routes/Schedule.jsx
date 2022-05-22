import { useState, useEffect } from "react";
import ScheduleDetails from "../../ScheduleDetails";

export default function Schedule() {
  // const [bands, setBands] = useState([]);
  const [schedule, setSchedule] = useState([]);
  // const [events, setEvents] = useState([]);

  // Fetching bands, schedule and events data:
  useEffect(() => {
    async function get() {
      // const resBands = await fetch("https://prototype-masters-foofest.herokuapp.com/bands");
      // const bandsData = await resBands.json();
      // setBands(bandsData);
      // // console.log("bandsdata:", bandsData);

      const resSchedule = await fetch("https://prototype-masters-foofest.herokuapp.com/schedule");
      const scheduleData = await resSchedule.json();
      setSchedule([scheduleData]);
      console.log("scheduleData:", scheduleData);

      // const resEvents = await fetch("https://prototype-masters-foofest.herokuapp.com/events");
      // const eventsData = await resEvents.json();
      // setEvents(eventsData);
      // // console.log("eventsData:", eventsData);
    }
    get();
  }, []);

  const transformDays = {
    mon: "monday",
    tue: "tuesday",
    wen: "wednesday",
    tor: "thursday",
    fri: "friday",
    sat: "saturday",
    sun: "sunday",
    schedule: schedule,
  };

  const newDate = Object.create(transformDays);

  return (
    <>

      {/* <ScheduleDetails /> */}
      {schedule.map((stage) => (
        <ScheduleDetails key={Math.random()} stage={stage} />
      ))} 
    </>
  );
}