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
        {/* {<BandInfo />} */}
        {/* <p>
          {Object.values(schedule).map((stage) => (
            <BandInfo key={Math.random()} stage={stage} />
          ))}
        </p> */}
      
          {/* FAKE TABLE FOR TEST AND CSS */}
        

      <table>
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
        <th className="height">MIDGARD</th>
        <td>{<BandInfo />}</td>
        <td>The Obelisks</td>
        <td>The What</td>
    </tr>
    <tr>
        <th className="height">JOTUNHEIM</th>
        <td>Main Hall</td>
        <td>West Wing</td>
        <td>Main Hall</td>
        <td>West Wing</td>
        <td>West Wing</td>
        <td>West Wing</td>
        <td>West Wing</td>
    </tr>
    <tr>
        <th className="height">VANEHEIM</th>
        <td>Main Hall</td>
        <td>West Wing</td>
        <td>Main Hall</td>
    </tr>
    </thead>
</table>

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
      
      </section>
    </>
  );
}
