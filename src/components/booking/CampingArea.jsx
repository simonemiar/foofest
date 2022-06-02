import { useState, useEffect } from "react";

import Map from "../../assets/svg/map.svg";
import AreaOption from "./AreaOption";

export default function CampingArea({ setReserveSpotObj }) {
  const [availableSpots, setAvailableSpots] = useState([]);

  // Here we are getting the available spots from the backend
  useEffect(() => {
    async function get() {
      const res = await fetch(`https://prototype-masters-foofest.herokuapp.com/available-spots`);
      const data = await res.json();
      setAvailableSpots(data);
    }
    get();
  }, []);

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
          {/* Here are er mapping all the diffent camping spots */}
          {availableSpots.map((spot) => (
            <AreaOption key={spot.area} spot={spot} setReserveSpotObj={setReserveSpotObj} />
          ))}
        </article>

        <article className="illustration">
          <div className="svg_img">
            <img className="area_map" src={Map} alt={Map} />
          </div>
        </article>
      </section>
    </section>
  );
}
