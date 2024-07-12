/* eslint-disable react/prop-types */
import React from 'react'
const person = ({ person }) => {
  return (
    <div className='col-md-3 p-2 bg-dark text-white my-5 text-center position-relative' style={{minHeight:'167px'}}>
      <div className="dis" style={{height:'146px'}}>
      <p>{person.first_name}</p>
      <p>{person.last_name}</p>
       <h2  style={{padding:'7px',backgroundColor:'gray',color:'black',width:'fit-content',position:'absolute',top:'0',left:'0',borderRadius:'2PX'}}>{person.id}</h2>
      <p style={{fontWeight:'bold'}}>{person.phone}</p>
      <p>{person.address}</p>
      </div>
      <div className="btns">
      <div className='btn btn-danger d-block my-3'>Delete</div>
      <div className='btn btn-primary d-block'>Update</div>
      </div>
     
    </div>
  );
};

export default person;