export default function TimeExpired({ popup }) {
  return (
    <>
      {popup ? (
        <section className="popup">
          <div className="overlay"></div>
          <article className="popup-content">
            <h2 className="popup_heading">Your session has expired</h2>
            <p>The timelimit has exceeded. You can choose resume to try again or restart to start over your reservation.</p>
            <div className="popup_button">
              <button>Resume</button>
              <button>Restart</button>
            </div>
          </article>
        </section>
      ) : null}
    </>
  );
}
