import { createContext, useState } from "react";

export const ScheduleContext = createContext();

export const ScheduleProvider = ({ children }) => {
  const [schedule, setSchedule] = useState([]);

  const value = {
    schedule,
    setSchedule,
  };
  return <ScheduleContext.Provider value={value}>{children}</ScheduleContext.Provider>;
};
