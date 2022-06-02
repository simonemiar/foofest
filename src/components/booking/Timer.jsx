// source: https://www.codegrepper.com/code-examples/javascript/react+countdown+timer+minutes+seconds
import { useState, useEffect } from "react";
import TimeExpired from "./TimeExpired";

// Here are we creating a custom hook that will be used to manage the state of the timer
const Timer = (props) => {
  const { initialMinute = 10, initialSeconds = 0 } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  // Here are we cheking what the current time is and if it´s less than the time we set, we are setting the time
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
      // Here we are checking if the timer is expired and if it´s then we will shown the time expired component
      if (!props.toggleComponentsArr.ToggleFlowComplete) {
        if (minutes === 0 && seconds === 1) {
          props.setPopup(true);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <>
      <TimeExpired popup={props.popup} />
      <section className="timer_container">
        <h3>Basket</h3>
        <h4>TIME LEFT: {`${minutes}:${seconds < 10 ? `0${seconds}` : seconds} `}</h4>
      </section>
    </>
  );
};

export default Timer;
