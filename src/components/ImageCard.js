import React from "react";

const ImageCard = props => {
  return (
    <div className="top" key={props.url}>
      <h2>Title: {props.title}</h2>
      <img src={props.url} alt="" />
      <div className="bottom">
        <p>{props.explanation}</p>
        <p>Copyright: {props.copyright}</p>
        <p>Date: {props.date}</p>
      </div>
    </div>
  );
};
export default ImageCard;