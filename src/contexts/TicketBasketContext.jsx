import { createContext, useState } from "react";

export const TicketBasketContext = createContext();

export const TicketBasketProvider = ({ children }) => {
  const [ticketBasket, setTicketBasket] = useState({
    ticketType: "",
    ticketAmount: null,
    ticketPrice: null,
    bookingFee: 99,
    campingArea: "",
    tent2PersonAmount: null,
    tent2PersonPrice: 299,
    tent3PersonAmount: null,
    tent3PersonPrice: 399,
    greenCamping: 249,
  });
  // {
  //   ticketType: "",
  //   ticketAmount: null,
  //   bookingFee: 99,
  //   campingArea: "",
  //   tent2PersonAmount: null,
  //   tent3PersonAmount: null,
  //   greenCamping: null,
  // }
  const value = {
    ticketBasket,
    setTicketBasket,
  };
  return <TicketBasketContext.Provider value={value}>{children}</TicketBasketContext.Provider>;
};
