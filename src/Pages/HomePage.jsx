import React from "react";
import Overview from "../Component/Overview/Overview";
import Main from "../Component/Main/Main";
import Timeline from "../Component/Timeline/Timeline";
import Prize from "../Component/Prize/Prize";

const HomePage = () => {
  return (
    <div>
     <Overview/>
     <Main/>
     <Timeline/>
     <Prize/>
    </div>
  );
};

export default HomePage;
