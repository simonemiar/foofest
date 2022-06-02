import { createContext, useState } from "react";

// Here at we create a context that will be used to store the basket
export const TicketBasketContext = createContext();

// Here are we are creating a custom hook that will be used to manage the state of the basket
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

  // Here are we taking the state and putting it into a object that we can use in the context
  const value = {
    ticketBasket,
    setTicketBasket,
  };
  // Here we are returning the context and the children
  return <TicketBasketContext.Provider value={value}>{children}</TicketBasketContext.Provider>;
};
