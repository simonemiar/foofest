export default function CampingArea() {
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
            <input type="radio" id="svartheim" name="area" value="svartheim"></input>
            <label htmlFor="svartheim">Svartheim</label>
            <p className="spots_left">Spots left: xxx</p>
          </div>

          {/* Nilfheim */}
          <div className="option">
            <input type="radio" id="nilfheim" name="area" value="nilfheim"></input>
            <label htmlFor="nilfheim">Nilfheim</label>
            <p className="spots_left">Spots left: xxx</p>
          </div>
          <div className="option">
            <input type="radio" id="helheim" name="area" value="helheim"></input>
            <label htmlFor="helheim">Helheim</label>
            <p className="spots_left">Spots left: xxx</p>
          </div>
          <div className="option">
            <input type="radio" id="muspelheim" name="area" value="muspelheim"></input>
            <label htmlFor="muspelheim">Muspelheim</label>
            <p className="spots_left">Spots left: xxx</p>
          </div>
          <div className="option">
            <input type="radio" id="alfheim" name="area" value="alfheim"></input>
            <label htmlFor="alfheim">Alfheim</label>
            <p className="spots_left">Spots left: xxx</p>
          </div>
        </article>
        <article className="illustration">
          <div className="svg_img">I'm a SVG img!!</div>
        </article>
      </section>
    </section>
  );
}
