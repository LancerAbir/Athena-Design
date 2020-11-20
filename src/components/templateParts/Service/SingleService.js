import React from "react";

const SingleService = (props) => {
   const { img, title, des } = props.service;
   return (
      <div className="col-12 col-sm-6 col-md-3">
         <div className="box text-center">
            <img src={img} alt="" />
            <h5>{title}</h5>
            <p>{des}</p>
         </div>
      </div>
   );
};

export default SingleService;
