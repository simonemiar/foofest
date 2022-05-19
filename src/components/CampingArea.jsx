import { useContext } from "react";

import { TicketBasketContext } from "../contexts/TicketBasketContext";

export default function CampingArea() {
  const { setTicketBasket } = useContext(TicketBasketContext);

  function handleOnChange(e) {
    const selectedOption = e.target.value;
    console.log("selected camping option is:", selectedOption);
    setTicketBasket((old) => {
      return {
        ...old,
        campingArea: e.target.value,
      };
    });
  }

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
          {/* Svartheim */}
          <div className="option">
            <input type="radio" id="svartheim" name="area" value="svartheim" onChange={handleOnChange}></input>
            <label htmlFor="svartheim">Svartheim</label>
            <p className="spots_left">Spots left: xxx</p>
          </div>

          {/* Nilfheim */}
          <article className="option">
            <input type="radio" id="nilfheim" name="area" value="nilfheim" onChange={handleOnChange}></input>
            <label htmlFor="nilfheim">Nilfheim</label>
            <p className="spots_left">Spots left: xxx</p>
          </article>

          {/* Helheim */}
          <article className="option">
            <input type="radio" id="helheim" name="area" value="helheim" onChange={handleOnChange}></input>
            <label htmlFor="helheim">Helheim</label>
            <p className="spots_left">Spots left: xxx</p>
          </article>

          {/* Muspelheim */}
          <article className="option">
            <input type="radio" id="muspelheim" name="area" value="muspelheim" onChange={handleOnChange}></input>
            <label htmlFor="muspelheim">Muspelheim</label>
            <p className="spots_left">Spots left: xxx</p>
          </article>

          {/* Alfheim */}
          <article className="option">
            <input type="radio" id="alfheim" name="area" value="alfheim" onChange={handleOnChange}></input>
            <label htmlFor="alfheim">Alfheim</label>
            <p className="spots_left">Spots left: xxx</p>
          </article>
        </article>

        {/* Link to dk map svg: https://www.amcharts.com/svg-maps/?map=denmark */}
        <article className="illustration">
          <div className="svg_img">
            <svg className="bi bi-geo-alt-fill svg_img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
          </div>
        </article>
      </section>
    </section>
  );
}
