import React from "react";
import Overview from "../Component/Overview/Overview";
import Main from "../Component/Main/Main";
import Timeline from "../Component/Timeline/Timeline";
import Prize from "../Component/Prize/Prize";
import Sponsors from "../Component/Sponsors/Sponsors";
import Policy from "../Component/Policy/Policy";

const HomePage = () => {
  return (
    <div>
     <Overview/>
     <Main/>
     <Timeline/>
     <Prize/>
     <Sponsors/>
     <Policy/>
    </div>
  );
};

export default HomePage;
