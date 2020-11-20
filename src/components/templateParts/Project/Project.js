import React from "react";

const Project = () => {
   return (
      <div className="container">
         <div className="row">
            <div className="col-md-6">
               <div className="project-image">
                  <img className="img-fullwed" src="" alt="" />
               </div>
            </div>
            <div className="col-md-6">
               <div className="project-content">
                  <h3 className="section-title">Stay Running & Project</h3>
                  <p>
                     It is a long established fact that a reader will be
                     distracted by the readable content of a page when looking
                     at its layout. The point of using Lorem Ipsum is that it
                     has a more-or-less normal distribution of letter.
                  </p>
                  <button to="/" className="btn theme-btn text-white">
                     Contact us
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Project;
