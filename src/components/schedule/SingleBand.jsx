// import { useState, useEffect } from "react";
import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { BandDataContext } from "../../contexts/BandDataContext";

export default function SingleBand(props) {
  const { bandData } = useContext(BandDataContext);
  // const [singleBandS, setSingleBandS] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
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

  // useEffect(() => {
  //   setSingleBandS(singleBand);
  //   console.log("singleBandS", singleBandS);
  // }, [singleBand]);

  // console.log(singleBand);

  return (
    <main id="single_band">
      <section>
        <header>
          <button className="back_btn" onClick={() => navigate(-1)}>
            Back
          </button>
          <h2>{singleBand.name}</h2>
          <p className="import_info">
            {singleBand.stage} / {singleBand.act.start}-{singleBand.act.end} / {singleBand.day}
          </p>
        </header>

        <figure className="single_band_img">
          <img
            src={
              singleBand.logo.indexOf("http://")
                ? `https://prototype-masters-foofest.herokuapp.com/logos/${singleBand.logo}`
                : singleBand.logo
            }
            alt={singleBand.name}
          />
          {singleBand.logoCredits ? (
            <figcaption>
              <strong>Credits: </strong>
              {singleBand.logoCredits}
            </figcaption>
          ) : null}
        </figure>

        <article className="genre_members">
          <div className="members">
            <h3>Band members</h3>
            <ul>
              {singleBand.members.map((member) => (
                <li key={Math.random()} className="member">
                  <p>{member}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="genre">
            <h3>Genre </h3>
            <p>
              <span>{singleBand.genre}</span>
            </p>
          </div>
        </article>

        <article className="description">
          <h3>Description</h3>
          <p className="desciption">{singleBand.bio}</p>
        </article>
      </section>
    </main>
  );
}
