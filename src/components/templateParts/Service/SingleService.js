import React from "react";

const SingleService = (props) => {
   const { img, title, des } = props.service;
   return (
      <div className="col-md-3">
         <div className="box text-center">
            <img src={img} alt="" />
            <h3 className="section-title">{title}</h3>
            <p>{des}</p>
         </div>
      </div>
   );
};

export default SingleService;
