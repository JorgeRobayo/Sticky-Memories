import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useImg } from "../../context/ImgContext";
import UploadImgText from "./upload-img.png";
import "./UploadImg.css";

function UploadImg() {
  const { selectedImg, setSelectedImg } = useImg();

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    setSelectedImg(file);
    console.log("image selected: ", file);
  };

  return (
    <div className="UploadImg">
      <div>
        <img className="upload-img-text" src={UploadImgText} alt="" />
        <div className="form-div"></div>
        {/* <h1>Upload Image First</h1> */}

        <input type="file" accept="image/*" onChange={handleImgChange} />
        {selectedImg && (
          <div>
            <img
              src={URL.createObjectURL(selectedImg)}
              alt="Selected"
              style={{ maxHeight: "100%", maxWidth: "200px" }}
            />
          </div>
        )}
        <div>
          <Link to="/orders/new">
            <button disabled={!selectedImg}>Continue</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UploadImg;
