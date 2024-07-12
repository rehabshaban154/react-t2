import React, { Component } from 'react';
import Location from './Location'; // Assuming Location.jsx is in the same directory
import locations from '../locations.json'; // Adjust the path as per your directory structure

export default class Locations extends Component {
  delete =(id)=>{
    //deep copy
    let newlocations=[...locations];
    //action
    
    newlocations=newlocations.filter((location)=>location.location_id !==id)
    //setstate
    this.setState({
      locations:newlocations,
    });
     };
  render() {

    return (
    <>
    <h2 style={{textAlign:'center',fontFamily:'cursive',letterSpacing:'3PX'}}>Locations</h2>
    <div className='d-flex gap-2  justify-content-center container flex-wrap'>
          {locations.map(location => (
            <Location key={location.location_id} location={location} />
          ))}
      </div>
    </>
     
    );
  }
}
