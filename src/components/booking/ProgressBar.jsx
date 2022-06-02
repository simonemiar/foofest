// Source: https://codepen.io/vijayshinde/pen/eYGMMJY?editors=1100

export default function ProgressBar({ isCurrent }) {
  return (
    <section className="progressbar_container">
      {/* Here are we checking if the current number is equal to isCurrent and changing a class that way */}
      <ul className="steps_container">
        <li className={`step-item ${isCurrent === 1 ? "current_item" : ""}`}>
          <span className="progress-count">
            <span className="bold">1</span>
          </span>
        </li>
        <li className={`step-item ${isCurrent === 2 ? "current_item" : ""}`}>
          <span className="progress-count">
            <span className="bold">2</span>
          </span>
        </li>
        <li className={`step-item ${isCurrent === 3 ? "current_item" : ""}`}>
          <span className="progress-count">
            <span className="bold">3</span>
          </span>
        </li>
        <li className={`step-item ${isCurrent === 4 ? "current_item" : ""}`}>
          <span className="progress-count">
            <span className="bold">4</span>
          </span>
        </li>
      </ul>
    </section>
  );
}
