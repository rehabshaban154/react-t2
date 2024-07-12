/* eslint-disable react/prop-types */
import React from 'react';

const Location = ({ location }) => {
  return (
    <div className='col-md-3 p-2 bg-dark text-white my-5 text-center position-relative' style={{minHeight:'167px'}}>
      <div className="dis" style={{height:'146px'}}>
      <h2 style={{marginLeft:'10px'}}>{location.name}</h2>
      <p>{location.description}</p>
      <p  style={{padding:'7px',backgroundColor:'gray',color:'black',width:'fit-content',position:'absolute',top:'0',left:'0',borderRadius:'2PX'}}
      >{location.location_id}</p>
      <p style={{fontWeight:'bold'}}>{location.country}</p>
      </div>
      <div className="btns">
      <div className='btn btn-danger d-block my-3'>Delete</div>
      <div className='btn btn-primary d-block'>Update</div>
      </div>
     
    </div>
  );
};

export default Location;
