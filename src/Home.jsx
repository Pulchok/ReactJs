import "./index.css";
import React from 'react';
import web from "../src/images/home.jpg";
import Common from "./Common";
const Home=()=>{
  return(
    <>
     <Common name="Grow your knowledge with" imgsrc={web} visit="/services" btname="Let's Start"/>
    </>
  );
};
export default Home;

