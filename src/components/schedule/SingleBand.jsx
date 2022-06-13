import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { BandDataContext } from "../../contexts/BandDataContext";

export default function SingleBand(props) {
  const { bandData } = useContext(BandDataContext);
  const [singleBandS, setSingleBandS] = useState([]);
  const params = useParams();
  // console.log(params);

  // useEffect(() => {
  //   setSingleBand((band) => {
  //     band = bandData.filter((band) => {
  //       return band.id === params.artist;
  //     })[0];
  //   });
  // });

  const singleBand = bandData.filter((band) => {
    return band.id === params.artistid;
  })[0];

  useEffect(() => {
    setSingleBandS(singleBand);
    console.log("singleBandS", singleBandS);
  });

  // console.log(singleBand);

  return (
    <main>
      <section>
        <h2 className="popup_heading">{singleBand.name}</h2>

        <article className="grid_desktop">
          <figure>
            <img
              src={
                singleBand.logo.indexOf("http://")
                  ? `https://prototype-masters-foofest.herokuapp.com/logos/${singleBand.logo}`
                  : singleBand.logo
              }
              alt={singleBand.name}
            />
            {singleBand.logoCredits ? <figcaption>{singleBand.logoCredits}</figcaption> : null}

            <div className="ribbon">
              <span>{singleBand.genre}</span>
            </div>
          </figure>
          <div className="top_info">
            <p>
              <span className="bold">Stage:</span> {singleBand.stage} - {singleBand.day}
            </p>
            <p>
              <span className="bold">Time-slot:</span> {singleBand.act.start}-{singleBand.act.end}
            </p>
          </div>
        </article>

        <article className="band_members">
          {singleBand.members.map((member) => (
            <div key={Math.random()} className="member">
              <p>{member}</p>
            </div>
          ))}
        </article>

        <div className="bio_container">
          <p>
            <span className="bold">BIO: </span>
            {singleBand.bio}
          </p>
          <i>
            <figcaption>Image credits: {singleBand.logoCredits}</figcaption>
          </i>
        </div>
      </section>
    </main>
  );
}
