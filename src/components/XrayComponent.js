import React, {Component} from 'react';
import '../App.css';
import corona from '../corona.jpg'

const Xray = (props) => {
  return(
      <div className = "page"> 
        <div classsName = "container">
          <h3 className = "Heading">Upload your CT Scan/ Chest X-ray</h3>
          <div className = "img">
            <img src={corona} alt="upload image here"/>
          </div>
          <br />
          <div class = "input-style">
            <input type="file" name = "image-upload" id = "input" accept = "image/*" />
          </div>
          <div >
            <button className = "button-label">Diagnose</button>
          </div>
        </div>
      </div>
  );
}

export default Xray;