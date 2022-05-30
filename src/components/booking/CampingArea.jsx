import { useState, useEffect } from "react";

import AreaOption from "./AreaOption";

export default function CampingArea() {
  const [availableSpots, setAvailableSpots] = useState([]);

  useEffect(() => {
    async function get() {
      const res = await fetch(`https://prototype-masters-foofest.herokuapp.com/available-spots`);
      const data = await res.json();
      setAvailableSpots(data);
    }
    get();
  }, []);

  // setAvailableSpots((old) => {
  //   return {
  //     ...old,
  //     lowerCaseArea: old.area.substring(0, 1).toLowerCase(),
  //   };
  // });

  return (
    <section id="camping-area_section">
      <div id="top-bar">
        <p>Camping area</p>
      </div>

      <div className="info">
        <p>Pick your camping area</p>
      </div>

      <section id="camping-area_main-content">
        <article className="area_options">
          {availableSpots.map((spot) => (
            <AreaOption key={spot.area} spot={spot} />
          ))}
        </article>

        {/* Link to dk map svg: https://www.amcharts.com/svg-maps/?map=denmark */}
        <article className="illustration">
          <div className="svg_img">
            <svg
              className="svg_img"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              // className="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
          </div>
        </article>
      </section>
    </section>
  );
}
