// import { useParams } from "react-router-dom";
import { useState } from "react";

export default function BandDetails(props) {
  const [showMore, setShowMore] = useState(false);
  const band = { ...props.holdShowBandDetails };
  // showBandDetails, setShowBandDetails

  const toggleModal = () => {
    props.setShowBandDetails(!props.showBandDetails);
  };

  // function stuff() {
    // const params = useParams();
    // console.log(params);
    // import useEffct, fetch the product, api $param
    // useEffect(() => {
    //   async function get() {
    //     const res = await fetch(
    //       `https://prototype-masters-foofest.herokuapp.com/bands/${params.name}`
    //     );
    //     const data = await res.json();
    //     setBandDetails(data);
    //   }
    //   get();
    // }, [params.name]);
  // }

  return (
    <>
      {props.showBandDetails ? (
        <section className="popup_band">
          <div onClick={toggleModal} className="overlay"></div>
          <article className="popup_band-content">
            <span onClick={toggleModal} className="close-band_details">
              &times;
            </span>

            <div className="content-top">
              <h2 className="popup_heading">{band.name}</h2>
              <p className="genre">{band.genre}</p>
            </div>

            {/* <article className="grid_desktop"> */}
            <div className="band_img">
              <figure>
                <img src={band.logo.indexOf("http://") ? `https://prototype-masters-foofest.herokuapp.com/logos/${band.logo}` : band.logo} alt={band.name} />
                {band.logoCredits ? <figcaption>{band.logoCredits}</figcaption> : null}
              </figure>
            </div>

            <div className="top_info">
              <p>
                <span className="bold">Stage:</span> {props.stage}
              </p>
              <p>
                <span className="bold">Time-slot:</span> {props.act.start}-{props.act.end}
              </p>
            </div>
            {/* </article> */}

            <article className="band_members">
              {band.members.map((member) => (
                <div key={Math.random()} className="member">
                  <p>{member}</p>
                </div>
              ))}
            </article>

            <div className="bio_container">
              <p>
                <span className="bold">BIO: </span>
                {showMore ? band.bio : `${band.bio.substring(0, 250)}`}
                <button className="toggle_show-btn" onClick={() => setShowMore(!showMore)}>
                  {showMore ? "Show less" : "Show more"}
                </button>
              </p>
            </div>
          </article>
        </section>
      ) : null}
    </>
  );
}
