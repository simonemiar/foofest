export default function CampingArea() {
  function handleOnChange(e) {
    const selectedOption = e.target.value;
    console.log("selected camping option is:", selectedOption);
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

        <article className="illustration">
          <div className="svg_img">I'm a SVG img!!</div>
        </article>
      </section>
    </section>
  );
}
