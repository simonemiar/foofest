// source:
// https://www.codegrepper.com/code-examples/javascript/react+countdown+timer+minutes+seconds
import React from "react";
import { useState, useEffect } from "react";

const Timer = (props) => {
  const { initialMinute = 0, initialSeconds = 10 } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
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
    console.log("time is up!");

    return <h2>Time left: 0:00</h2>;
  }

  return <div className="timer_container">{minutes === 0 && seconds === 0 ? ended() : <h2>Time left: {`${minutes}:${seconds < 10 ? `0${seconds}` : seconds} `}</h2>}</div>;
};

export default Timer;
