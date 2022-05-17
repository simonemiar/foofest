import { createContext, useState } from "react";

export const TicketBasketContext = createContext();

export const TicketBasketProvider = ({ children }) => {
  const [ticketBasket, setTicketBasket] = useState([]);
  const value = {
    ticketBasket,
    setTicketBasket,
  };
  return <TicketBasketContext.Provider value={value}>{children}</TicketBasketContext.Provider>;
};
