import React from "react";
import Achievements from "../../templateParts/Achievements/Achievements";
//** Import Template Parts */
import Header from "../../templateParts/Header/Header";
import Project from "../../templateParts/Project/Project";
import Service from "../../templateParts/Service/Service";

const Home = () => {
   return (
      <>
         <Header></Header>
         <Service></Service>
         <Project></Project>
         <Achievements></Achievements>
      </>
   );
};

export default Home;
