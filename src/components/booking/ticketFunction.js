//TicketAmount

// Here are we updating the ticket amount and checking if the amount is valid
export function addTicket(ticketBasket, setTicketBasket) {
  if (ticketBasket.ticketAmount === 5) {
    alert("You can max buy 5 tickets a the time");
  } else {
    setTicketBasket((old) => {
      return {
        ...old,
        ticketAmount: old.ticketAmount + 1,
      };
    });
  }
}

// Here are we updating the ticket amount and checking if the amount is valid
export function removeTicket(ticketBasket, setTicketBasket) {
  if (ticketBasket.ticketAmount === 1) {
    setTicketBasket((old) => {
      return {
        ...old,
        ticketAmount: (old.ticketAmount = 1),
      };
    });
    alert("You need to have minimum 1 ticket");
  } else {
    setTicketBasket((old) => {
      return {
        ...old,
        ticketAmount: old.ticketAmount - 1,
      };
    });
  }
}

// Functions for 2-person tent
// Here are we updating the tent amount and checking if the amount is valid
export function addTwoTent(ticketBasket, setTicketBasket) {
  if (
    ticketBasket.tent2PersonAmount + ticketBasket.tent3PersonAmount ===
    ticketBasket.ticketAmount
  ) {
    alert("You can only have as many tent as tickets");
  } else {
    setTicketBasket((old) => {
      return {
        ...old,
        tent2PersonAmount: ticketBasket.tent2PersonAmount + 1,
      };
    });
  }
}

// Here are we updating the tent amount and checking if the amount is valid
export function removeTwoTent(ticketBasket, setTicketBasket) {
  if (ticketBasket.tent2PersonAmount === 0) {
    setTicketBasket((old) => {
      return {
        ...old,
        tent2PersonAmount: (ticketBasket.tent2PersonAmount = 0),
      };
    });
  } else {
    setTicketBasket((old) => {
      return { ...old, tent2PersonAmount: ticketBasket.tent2PersonAmount - 1 };
    });
  }
}

// Functions for 3-person tent
// Here are we updating the tent amount and checking if the amount is valid
export function addThreeTent(ticketBasket, setTicketBasket) {
  if (
    ticketBasket.tent2PersonAmount + ticketBasket.tent3PersonAmount ===
    ticketBasket.ticketAmount
  ) {
    alert("You can only have as many tent as tickets");
  } else {
    setTicketBasket((old) => {
      return {
        ...old,
        tent3PersonAmount: ticketBasket.tent3PersonAmount + 1,
      };
    });
  }
}

// Here are we updating the tent amount and checking if the amount is valid
export function removeThreeTent(ticketBasket, setTicketBasket) {
  if (ticketBasket.tent3PersonAmount === 0) {
    setTicketBasket((old) => {
      return {
        ...old,
        tent3PersonAmount: (ticketBasket.tent3PersonAmount = 0),
      };
    });
  } else {
    setTicketBasket((old) => {
      return { ...old, tent3PersonAmount: ticketBasket.tent3PersonAmount - 1 };
    });
  }
}

// Function for green option add-on
// export function greenOption(e, setTicketBasket) {
//   const checked = e.target.checked;
//   if (checked) {
//     setTicketBasket((old) => {
//       return {
//         ...old,
//         isGreenCamping: true,
//       };
//     });
//   } else {
//     setTicketBasket((old) => {
//       return {
//         ...old,
//         isGreenCamping: false,
//       };
//     });
//   }
// }
