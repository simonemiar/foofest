import { createContext, useState } from "react";

export const BandDataContext = createContext();

export const BandDataProvider = ({ children }) => {
  const [bandData, setBandData] = useState([]);

  const value = {
    bandData,
    setBandData,
  };
  return <BandDataContext.Provider value={value}>{children}</BandDataContext.Provider>;
};
