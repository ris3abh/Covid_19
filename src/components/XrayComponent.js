import React, {Component, useState} from 'react';
import {Col, Row} from 'reactstrap';
import '../App.css';
import lungs from '../lungs.jpg'


class Xray extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: lungs
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
      this.setState({
        image: URL.createObjectURL(event.target.files[0])
      });
    } 

  render () {
    return(
      <div className = "container"> 
        <h1 className = "font-loader">X-ray Prediction</h1>
        <h2 style={{fontFamily:'Noto Serif', textAlign:'center'}}>Check if your x-ray shows traces of covid</h2>
        <Row>
          <Col sm="6" >
            <img src={this.state.image} alt="upload image here" className = "img"/>
            <div class = "input-style">
              <input type="file" name = "image-upload" id = "input" accept = "image/*" onChange={this.handleChange}/>
              <button className = "button-label" onClick={this.handleSubmit} style={{color: "#05288b"}}>Diagnose</button>
            </div>
          </Col>
        </Row>  
      </div>
    );
  }
}

export default Xray;