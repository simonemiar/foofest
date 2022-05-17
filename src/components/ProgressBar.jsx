// Source:
//https://codepen.io/vijayshinde/pen/eYGMMJY?editors=1100

export default function ProgressBar() {
  return (
    <section class="progressbar_container">
      <ul class="step-wizard-list">
        <li class="step-wizard-item ">
          <span class="progress-count">1</span>
        </li>
        <li class="step-wizard-item ">
          <span class="progress-count">2</span>
        </li>
        <li class="step-wizard-item current-item ">
          <span class="progress-count">3</span>
        </li>
        <li class="step-wizard-item   ">
          <span class="progress-count">4</span>
        </li>
      </ul>
    </section>
  );
}
