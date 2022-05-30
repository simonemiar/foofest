// import { useParams } from "react-router-dom";

export default function BandDetails(props) {
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

            <article className="grid_desktop">
              <div className="band_img">
                <figure>
                  <img
                    src={
                      band.logo.indexOf("http://")
                        ? `https://prototype-masters-foofest.herokuapp.com/logos/${band.logo}`
                        : band.logo
                    }
                    alt={band.name}
                  />
                  {band.logoCredits ? <figcaption>{band.logoCredits}</figcaption> : null}
                </figure>
              </div>

              <div className="time">
                {props.act.start}-{props.act.end}
              </div>
              <div className="stage">{props.stage}</div>

              <article className="band_members">
                {band.members.map((member) => (
                  <div key={Math.random()} className="member">
                    <p>{member}</p>
                  </div>
                ))}
              </article>

              <div className="bio_container">
                <p>
                  {band.bio}
                </p>
              </div>
            </article>
          </article>
        </section>
      ) : null}
    </>
  );
}
