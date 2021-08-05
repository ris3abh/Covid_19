import React, {Component, useState} from 'react';
import {Col, Row} from 'reactstrap';
import * as tf from '@tensorflow/tfjs';
import { imgWidth, imgHeight } from '../shared/config.js';
import '../App.css';
import lungs from '../lungs.jpg'

// function CovidStatus({image}) {
//     const [state, setState] = useState(0)
//     async function handleImage(image) {
//         const model = await tf.loadLayersModel('/tfjs/model.json')
//         var img = new Image
//         img.width = imgWidth
//         img.height = imgHeight
//         img.src = image
//         var tensorImg = tf.browser.fromPixels(img).resizeNearestNeighbor([imgWidth, imgHeight]).toFloat().expandDims()
//         var prediction = model.predict(tensorImg).data()
//             .then((res) => {
//                 setState(res)
//             })
//     }
//     return (
//         <div>
//             <div className = "font-loader"><h3>Your X-ray shows your Covid Status is: </h3></div>
//             <div className = "font-loader"><h3>Predicted: {state} </h3></div>
//         </div>
//     );
// }

function Xray () {

  const [dataUri, setDataUri] = useState(lungs)
  const [state, setState] = useState(0)


  async function handleImage(dataUri) {

        const model = await tf.loadLayersModel('/tfjs/model.json')
        var img = new Image
        img.width = imgWidth
        img.height = imgHeight
        img.src = dataUri
        var tensorImg = tf.browser.fromPixels(img).resizeNearestNeighbor([imgWidth, imgHeight]).toFloat().expandDims()
        var prediction = model.predict(tensorImg).data()
            .then((res) => {
                setState(res)
            })
        return(
            <div>
                <div className = "font-loader"><h3>Your X-ray shows your Covid Status is: </h3></div>
                <div className = "font-loader"><h3>Predicted: {state} </h3></div>
            </div>
        )
    }

    return(
      <div className = "container"> 
        <h1 className = "font-loader">X-ray Prediction</h1>
        <h2 style={{fontFamily:'Noto Serif', textAlign:'center'}}>Check if your x-ray shows traces of covid</h2>
        <Row>
          <Col sm="6" >
            <img src={dataUri} alt="upload image here" className = "img"/>
            <div class = "input-style">
              <input type="file" name = "image-upload" id = "input" accept = "image/*" onChange={(event) => setDataUri(event.target.file)}/>
              <button className = "button-label" onClick={handleImage} style={{color: "#05288b"}}>Diagnose</button>
            </div>
          </Col>
          <Col sm="6">
             <div>
              <div className = "font-loader"><h3>Your X-ray shows your Covid Status is: </h3></div>
              <div className = "font-loader"><h3>Predicted: {state} </h3></div>
             </div>
          </Col>
        </Row>  
      </div>
    );
  }


export default Xray;