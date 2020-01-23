import React from "react";

const ImageCard = props => {
  return (
    <div className="imageContainer">
      <h2>{props.data.title}</h2>
      <img src={props.data.hdurl} alt="" />
      <div className="bottom">
        <p className= "paragraph">{props.data.explanation}</p>
        <p>{props.data.copyright}</p>
        <p>{props.data.date}</p>
      </div>
    </div>
  );
};
export default ImageCard;