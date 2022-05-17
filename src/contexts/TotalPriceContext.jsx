import { createContext, useState } from "react";

export const TotalPriceContext = createContext();

export const TotalPriceProvider = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const value = {
    totalPrice,
    setTotalPrice,
  };
  return <TotalPriceContext.Provider value={value}>{children}</TotalPriceContext.Provider>;
};
