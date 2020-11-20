import React, { useState } from "react";
import "./service.css";
//** Image */
import service1 from "../../../images/Group 65@2x.png";
import service2 from "../../../images/Group 66@2x.png";
import service3 from "../../../images/Group 69@2x.png";
import service4 from "../../../images/Group 72@2x.png";
import SingleService from "./SingleService";

const Service = () => {
   const [services, setservices] = useState([
      {
         img: service1,
         title: "Experience Design",
         des:
            "The point of using Lorem Ipsum is that it has a more-orless normal.",
      },
      {
         img: service2,
         title: "Interface Design",
         des:
            "The point of using Lorem Ipsum is that it has a more-orless normal.",
      },
      {
         img: service3,
         title: "Prototyping",
         des:
            "The point of using Lorem Ipsum is that it has a more-orless normal.",
      },
      {
         img: service4,
         title: "Illustration",
         des:
            "The point of using Lorem Ipsum is that it has a more-orless normal.",
      },
   ]);
   return (
      <section className="service">
         <div className="container">
            <div className="row">
               <div className="col-12 col-sm-12 col-md-12">
                  <div className="section-content text-center">
                     <h2>What we do</h2>
                     <p>
                        Our main focus is to make the User Experience very
                        <br />
                        simple and easy. Simplicity is our Strength
                     </p>
                  </div>
               </div>
            </div>
            <div className="row">
               {services.map((service) => (
                  <SingleService service={service}></SingleService>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Service;
