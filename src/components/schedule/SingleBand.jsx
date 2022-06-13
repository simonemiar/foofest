import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { BandDataContext } from "../../contexts/BandDataContext";

export default function SingleBand(props) {
  const { bandData } = useContext(BandDataContext);
  const [singleBandS, setSingleBandS] = useState([]);
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

  useEffect(() => {
    setSingleBandS(singleBand);
    console.log("singleBandS", singleBandS);
  });

  // console.log(singleBand);

  return (
    <main id="single_band">
      <section className="btn_name_time">
        <button className="back_btn" onClick={() => navigate(-1)}>
          Back
        </button>
        <h2>{singleBand.name}</h2>
        <p className="import_info">
          {singleBand.stage} / {singleBand.act.start}-{singleBand.act.end} / {singleBand.day}
        </p>
      </section>

      <section className="single_band_img">
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
        </figure>
      </section>

      <section className="more_info">
        <article className="genre_members">
          <div className="members">
            <p>
              <strong>Band members:</strong>
            </p>
            <ul>
              {singleBand.members.map((member) => (
                <li key={Math.random()} className="member">
                  <p>{member}</p>
                </li>
              ))}
            </ul>
          </div>

          <p className="genre">
            <strong>Genre: </strong>
            <span>{singleBand.genre}</span>
          </p>
        </article>

        <p className="desciption">{singleBand.bio}</p>
      </section>
    </main>
  );
}
