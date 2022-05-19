import { useState } from "react";

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