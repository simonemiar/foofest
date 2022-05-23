import { useState, useEffect } from "react";

import BandInfo from "./BandInfo";

export default function ScheduleDetails({ day, schedule }) {
  const [showSchedule, setScheduleMore] = useState(false);

  useEffect(() => {
    // console.log(schedule);
  });

  return (
    <>
      <button id="details_button" onClick={() => setScheduleMore((old) => !old)}>
        {/* monday */}
        {day}
      </button>
      {/* <p>{schedule.Midgard.mon[0].act}</p> */}
      {/* <p>
          {schedule.map((stage) => (
            <BandInfo key={Math.random()} stage={stage} />
          ))}
        </p> */}

      <section id="details_section" style={{ display: showSchedule ? "block" : "none" }}>
        {<BandInfo />}
        {/* <p>
          {Object.values(schedule).map((stage) => (
            <BandInfo key={Math.random()} stage={stage} />
          ))}
        </p> */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis non rerum ipsam porro sed
          a tempore optio, architecto voluptatibus voluptate deserunt mollitia quas numquam dolor
          vero aliquid nam, magnam tenetur. Ipsum officia eum explicabo iusto ea porro ab quo
          voluptatibus dolor magnam, nulla corporis maiores similique enim? Illum, reiciendis
          aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis non rerum ipsam
          porro sed a tempore optio, architecto voluptatibus voluptate deserunt mollitia quas
          numquam dolor vero aliquid nam, magnam tenetur. Ipsum officia eum explicabo iusto ea porro
          ab quo voluptatibus dolor magnam, nulla corporis maiores similique enim? Illum, reiciendis
          aperiam?
        </p>
      </section>
    </>
  );
}
