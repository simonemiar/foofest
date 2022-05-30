import { useState, useEffect } from "react";

import Map from "../../assets/svg/map.svg";

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
            <img className="area_map" src={Map} alt={Map} />
          </div>
        </article>
      </section>
    </section>
  );
}
