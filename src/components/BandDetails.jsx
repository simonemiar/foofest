import { useState } from "react";
export default function BandDetails() {
  const [showBandDetails, setShowBandDetails] = useState(true);

  const toggleModal = () => {
    setShowBandDetails(!showBandDetails);
  };

  return (
    <>
      {showBandDetails ? (
        <section className="popup_band">
          <div onClick={toggleModal} className="overlay"></div>
          <article className="popup_band-content">
            <span onClick={toggleModal} className="close-band_details">
              &times;
            </span>
            <div className="content-top">
              <h2 className="popup_heading">Band name</h2>
              <p className="genre">(Genre)</p>
            </div>

            <article className="grid_desktop">
              <div className="band_img"></div>
              <article className="wrapper">
                <div className="bio_container">
                  <p>
                    <span className="bio">BIO: </span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro unde quod harum, nihil libero blanditiis, hic, et neque earum facere qui! Quas quae delectus amet, placeat
                    possimus vitae veritatis sapiente.
                  </p>
                </div>

                <article className="band_members">
                  <div className="band_member">
                    <p>Member name</p>
                  </div>

                  <div className="band_member">
                    <p>Member name</p>
                  </div>
                  <div className="band_member">
                    <p>Member name</p>
                  </div>
                </article>
              </article>
            </article>
          </article>
        </section>
      ) : null}
    </>
  );
}
