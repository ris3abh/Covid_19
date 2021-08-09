import { useState } from "react";
import { Button, Col, Row } from "reactstrap";
import * as tf from "@tensorflow/tfjs";
import { imgWidth, imgHeight } from "../shared/config.js";
import "../App.css";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";

const XRay = () => {
  const [dataURL, setDataURL] = useState("");
  const [prediction, setPrediction] = useState(0);

  // it takes the image and pass it through the model to give prediction
  async function handleImage(dataURL) {
    const model = await tf.loadLayersModel("/tfjs/model.json");

    var img = new Image();
    img.width = imgWidth;
    img.height = imgHeight;
    img.src = dataURL;

    var tensorImg = tf.browser
      .fromPixels(img)
      .resizeNearestNeighbor([imgWidth, imgHeight])
      .toFloat()
      .expandDims();
    
    model
      .predict(tensorImg)
      .data()
      .then((res) => {
        setPrediction(res);
      });
    console.log(tensorImg);
  }

  // Testing functions
  const showImageEvent = () => {
    console.log(dataURL);
  };

  const showPrediction = () => {
    console.log(`Prediction result: ${prediction}`);
  };

  // Uploader Component
  const MyUploader = () => {
    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files) => {
      const file = files.map((f) => f.meta);
      const imageURL = file[0].previewUrl;
      setDataURL(imageURL);
    };

    return <Dropzone onSubmit={handleSubmit} accept="image/*" maxFiles={1} />;
  };

  return (
    <div className="container">
      <h1 className="font-loader">X-ray Prediction</h1>
      <h2 style={{ fontFamily: "Noto Serif", textAlign: "center" }}>
        Check if your x-ray shows traces of covid
      </h2>
      <Row>
        <Col sm="6">
          {dataURL && (<img src={dataURL} alt="Uploaded XRay" className="img" />)}
          <div class="input-style">
            <MyUploader />

            <Button
              className="button-label"
              onClick={() => handleImage(dataURL)}
            >
              Diagnose
            </Button>
          </div>
        </Col>

        {prediction && (
          <Col sm="6">
            <div className="prediction-card">
              <div className="font-loader">
                <h3>Your X-ray shows your Covid Status is: </h3>
              </div>
              <div className="font-loader">
                <h3>Predicted: {prediction} </h3>
              </div>
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
}

export default XRay;
