import "./index.css";
import React from 'react';
import { NavLink } from "react-router-dom";

const Card=(props)=>{
  return(
    <>        
            <div className="col-md-4 col-10 mx-auto">
            <div className="card">
  <img src={props.imgsrc} className="card-img-top" alt="Card" />
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{props.title}</h5>
    <p class="card-text">Programming is the process of creating a set of instructions that tell a computer how to perform a task.</p>
    <NavLink to="#" className="btn btn-primary">Learn More</NavLink>
  </div>
</div> 
   </div>
           
    </>
  );
};
export default Card;