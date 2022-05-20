// source: https://www.codegrepper.com/code-examples/javascript/react+countdown+timer+minutes+seconds
import { useState, useEffect } from "react";
import TimeExpired from "./TimeExpired";

const Timer = (props) => {
  const { initialMinute = 0, initialSeconds = 10 } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  // Popup
  const [popup, setPopup] = useState(false);

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
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  function ended() {
    console.log(setPopup((old) => !old));
  }

  return (
    <>
      <TimeExpired popup={popup} />
      <div className="timer_container">
        <h2>BASKET</h2>
        {minutes === 0 && seconds === 0 ? () => ended() : <h3>TIME LEFT: {`${minutes}:${seconds < 10 ? `0${seconds}` : seconds} `}</h3>}
      </div>
    </>
  );
};

export default Timer;
