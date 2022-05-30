// source: https://www.codegrepper.com/code-examples/javascript/react+countdown+timer+minutes+seconds
import { useState, useEffect } from "react";
import TimeExpired from "./TimeExpired";

const Timer = (props) => {
  const { initialMinute = 10, initialSeconds = 0 } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  // Popup
  // const [popup, setPopup] = useState(false);

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
      <div className="timer_container">
        <h2>BASKET</h2>
        {/* {minutes === 0 && seconds === 0 ? null : ( */}
        <h3>TIME LEFT: {`${minutes}:${seconds < 10 ? `0${seconds}` : seconds} `}</h3>
        {/* )} */}
      </div>
    </>
  );
};

export default Timer;
