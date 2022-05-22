import { useState } from "react";

export default function ScheduleDetails(props) {
  const [showSchedule, setScheduleMore] = useState(false);

  // console.log(props.stage.Midgard);

  return (
    <>
      <button id="details_button" onClick={() => setScheduleMore((old) => !old)}>monday
      </button>
      {props.stage.Midgard.mon[0].act}
      <section id="details_section" style={{ display: showSchedule ? "block" : "none" }}>
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