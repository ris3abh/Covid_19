import { useState } from "react";
import { Button, Col, Row } from "reactstrap";
import * as tf from "@tensorflow/tfjs";
import { imgWidth, imgHeight } from "../shared/config.js";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import lungs from "../lungs.jpg";

const XRay = () => {
  const [dataURL, setDataURL] = useState(lungs);
  // const [prediction, setPrediction] = useState();
  const [msg, setMsg] = useState(undefined);

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
        handleMsg(res[0]);
      });
  }

  // Message instead of giving away number
  const handleMsg = (prediction) => {
    if (prediction === 0) setMsg("the model suggests you maybe Covid positive");
    else if (prediction === 1)
      setMsg("the model suggests you are Covid negative");
  };

  // Uploader Component
  const MyUploader = () => {
    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files) => {
      const file = files.map((f) => f.meta);
      const imageURL = file[0].previewUrl;
      console.log(imageURL);
      setDataURL(imageURL);
    };

    return <Dropzone onSubmit={handleSubmit} accept="image/*" maxFiles={1} />;
  };

  return (
    <div className="container">
      <h1 className="font-loader">X-ray Prediction</h1>
      <h2
        style={{
          fontFamily: "Noto Sans",
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        Check if your x-ray shows traces of covid
      </h2>
      <Row>
        <Col sm="6">
          {dataURL && <img src={dataURL} alt="Uploaded XRay" className="img" />}
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
        <Col sm="6" className="font-loader" style={{ marginTop: "150px" }}>
          <div style={{ marginLeft: "60px" }}>
            {msg && <h3>Your X-ray shows your Covid Status as {msg}</h3>}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default XRay;
