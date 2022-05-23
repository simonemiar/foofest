import { createContext, useState } from "react";

export const TicketBasketContext = createContext();

export const TicketBasketProvider = ({ children }) => {
  const [ticketBasket, setTicketBasket] = useState({
    ticketType: "",
    ticketAmount: 1,
    ticketPrice: null,
    bookingFee: 99,
    campingArea: "",
    tent2PersonAmount: 0,
    tent2PersonPrice: 299,
    tent3PersonAmount: 0,
    tent3PersonPrice: 399,
    isGreenCamping: false,
    greenCamping: 249,
    personInfo: [],
  });

  const value = {
    ticketBasket,
    setTicketBasket,
  };
  return <TicketBasketContext.Provider value={value}>{children}</TicketBasketContext.Provider>;
};
