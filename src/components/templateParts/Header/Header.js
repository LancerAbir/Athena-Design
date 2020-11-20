import React from "react";
import "./header.css";
import Navbar from "../Navbar/Navbar";
//** Import Image */
import headerImage from "../../../images/16 [Converted]@2x.png";
import blueBg from "../../../images/Group 45@2x.png";
import dotBg from "../../../images/headerDot.png";
import stuBg from "../../../images/stu.png";
import pinkBg from "../../../images/Group 46@2x.png";

const Header = () => {
   return (
      <section className="header">
         <div className="blue-bg">
            <img className="img-fluid" src={blueBg} alt="" />
         </div>
         <div className="dot-bg2">
            <img className="img-fluid" src={dotBg} alt="" />
         </div>
         <div className="stu-bg">
            <img className="img-fluid" src={stuBg} alt="" />
         </div>
         <div className="stu-bg2">
            <img className="img-fluid" src={stuBg} alt="" />
         </div>
         <div className="pink-bg">
            <img className="img-fluid" src={pinkBg} alt="" />
         </div>

         <div className="container">
            <Navbar></Navbar>
            <div className="row main-header">
               <div className="col-12 col-sm-12 col-md-5 d-flex">
                  <div className="header-content align-self-center">
                     <h1>
                        Florence <br />
                        agency
                     </h1>
                     <p>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book.
                     </p>

                     <button to="/pricing" className="btn theme-btn text-white">
                        See Pricing
                     </button>
                  </div>
               </div>
               <div className="col-12 col-sm-12 col-md-7 mr-auto">
                  <div className="header-image">
                     <img className="img-fluid" src={headerImage} alt="" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Header;
