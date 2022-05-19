// Source: https://codepen.io/vijayshinde/pen/eYGMMJY?editors=1100

export default function ProgressBar({ isCurrent, setIsCurrent }) {
  return (
    <section className="progressbar_container">
      <ul className="steps_container">
        <li className={`step-item ${isCurrent === 1 ? "current_item" : ""}`}>
          <span className="progress-count">1</span>
        </li>

        <li className={`step-item ${isCurrent === 2 ? "current_item" : ""}`}>
          <span className="progress-count">2</span>
        </li>
        <li className={`step-item ${isCurrent === 3 ? "current_item" : ""}`}>
          <span className="progress-count">3</span>
        </li>
        <li className={`step-item ${isCurrent === 4 ? "current_item" : ""}`}>
          <span className="progress-count">4</span>
        </li>
      </ul>
    </section>
  );
}
