import { useState, useEffect } from "react";

export default function Schedule(){
    return (
    <div>
    <h1>Schedule</h1>
    <Details />
    <Details />
    <Details />
    <Details />
    <Details />
    <Details />
    <Details />
    </div>
    )
}

function Details(){
    const [showSchedule, setScheduleMore] = useState(false);

    return (
        <div>

        <button id="details_button" onClick={()=> setScheduleMore((old) => !old)}><summary><h3>MONDAY</h3></summary></button> 
        <section id="details_section" style={{display: showSchedule ? "block" : "none"}}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis non rerum ipsam porro sed a tempore optio, architecto voluptatibus voluptate deserunt mollitia quas numquam dolor vero aliquid nam, magnam tenetur. Ipsum officia eum explicabo iusto ea porro ab quo voluptatibus dolor magnam, nulla corporis maiores similique enim? Illum, reiciendis aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis non rerum ipsam porro sed a tempore optio, architecto voluptatibus voluptate deserunt mollitia quas numquam dolor vero aliquid nam, magnam tenetur. Ipsum officia eum explicabo iusto ea porro ab quo voluptatibus dolor magnam, nulla corporis maiores similique enim? Illum, reiciendis aperiam?</p>

        </section>


        </div>
      );
}

//BELOW IS WORKING 
// // Fetch all the details element.
// const detailss = document.querySelectorAll("details");

// // Add the onclick listeners.
// detailss.forEach((targetDetail) => {
//   targetDetail.addEventListener("click", () => {
//     // Close all the details that are not targetDetail.
//     detailss.forEach((detail) => {
//       if (detail !== targetDetail) {
//         detail.removeAttribute("open");
//       }
//     });
//   });
// });


