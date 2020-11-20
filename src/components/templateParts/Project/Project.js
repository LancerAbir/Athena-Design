import React from "react";
import "./project.css";
//** Import Image */
import projectImage from "../../../images/20 [Converted]@2x.png";

const Project = () => {
   return (
      <section className="project">
         <div className="container">
            <div className="row">
               <div className="col-md-7">
                  <div className="project-image">
                     <img className="img-fluid" src={projectImage} alt="" />
                  </div>
               </div>
               <div className="col-md-5 d-flex">
                  <div className="section-content common align-self-center">
                     <h2>Stay Running & Project</h2>
                     <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letter.
                     </p>
                     <button to="/" className="btn theme-btn text-white">
                        Contact us
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Project;
