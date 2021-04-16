import React, { useState } from 'react';
const Contact=()=>{
  const[data,setData]=useState({
    fullname:"",
    phonenumber:"",
    email:"",
    message:"",
  });

  const InputEvent =(event) =>{
    const{name,value}=event.target;
    setData((preVal)=>{
      return{
        ...preVal,
        [name]:value,
      };
    });
  };

  const formSubmit=(e)=>{
    e.preventDefault();
    alert(`Name:${data.fullname}  Phone:${data.phonenumber}  Email:${data.email}  Message:${data.message}`)

  };

  return(
    <>
   <div className="my-5">
     <h1 className="text-center">Contact Us</h1>

   </div>

   <div className="container contact_div">
     <div className="row">
       <div className="col-md-6 col-10 mx-auto">
<form onSubmit={formSubmit}> 
       <div className="mb-3">
  <label id="exampleFormControlInput1" className="form-label">Full Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Your Name" />
</div>
       <div className="mb-3">
  <label id="exampleFormControlInput1" className="form-label">Mobile Number</label>
  <input type="number" className="form-control" id="exampleFormControlInput1" name="phonenumber" value={data.phonenumber} onChange={InputEvent} placeholder="Phone Number" />
</div>
       <div className="mb-3">
  <label id="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@mail.com" />
</div>
<div className="mb-3">
  <label id="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} onChange={InputEvent}></textarea>
</div>

<div className="col-12">
  <button className="btn btn-outline-primary mb-3" type="submit"> Submit Form</button>
</div>
</form>

       </div>
     </div>
   </div>
       
    </>
  );
};
export default Contact;