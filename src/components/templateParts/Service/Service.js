import React, { useState } from "react";
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
      <div>
         <div className="container">
            <div className="row">
               <div className="col-12 col-sm-12 col-md-12">
                  <h2>What we do</h2>
               </div>
            </div>
            <div className="row">
               {services.map((service) => (
                  <SingleService service={service}></SingleService>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Service;
