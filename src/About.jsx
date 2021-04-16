import "./index.css";
import React from 'react';
import Common from './Common';
import web from "../src/images/about.jpg";
const About=()=>{
  return(
    <>
    <Common name="Welcome to About page of" imgsrc={web} visit="/contact" btname="Contact Us" />

    </>
  );
};
export default About;