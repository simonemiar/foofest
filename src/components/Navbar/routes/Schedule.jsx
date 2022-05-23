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
      setSchedule(scheduleData);
      console.log("scheduleData:", scheduleData);

      // const resEvents = await fetch("https://prototype-masters-foofest.herokuapp.com/events");
      // const eventsData = await resEvents.json();
      // setEvents(eventsData);
      // // console.log("eventsData:", eventsData);
    }
    get();
  }, []);

  const daysSchedule = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  // scheduleObj = {
  //   monday: {
  //     day: "monday",
  //     Midgard: schedule.Midgard.mon,
  //     Vanaheim: schedule.Vanaheim.mon,
  //     Jotunheim: schedule.Jotunheim.mon,
  //   },
  //   tuesday: {
  //     day: "monday",
  //     Midgard: schedule.Midgard.tue,
  //     Vanaheim: schedule.Vanaheim.tue,
  //     Jotunheim: schedule.Jotunheim.tue,
  //   },
  // };

  // const scheduleObj = [
  //   {
  //     day: "monday",
  //     Midgard: schedule.Midgard.mon,
  //     Vanaheim: schedule.Vanaheim.mon,
  //     Jotunheim: schedule.Jotunheim.mon,
  //   },
  //   {
  //     day: "monday",
  //     Midgard: schedule.Midgard.tue,
  //     Vanaheim: schedule.Vanaheim.tue,
  //     Jotunheim: schedule.Jotunheim.tue,
  //   },
  // ];

  return (
    <>
      {/* {schedule.map((stage) => (
        <ScheduleDetails key={Math.random()} stage={stage} daysSchedule={daysSchedule} />
      ))} */}

      {daysSchedule.map((day) => (
        <ScheduleDetails key={Math.random()} schedule={schedule} day={day} />
      ))}

      {/* {scheduleObj.map((day, index) => (
        <ScheduleDetails key={index} day={day} />
      ))} */}
    </>
  );
}
