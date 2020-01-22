import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard"
import axios from "axios";

function ImageContainer() {
const [picture, setPictures] = useState([]);
  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=WiYGp5uin6CV4gjqQMNWA0rlKbcmhVIJkpaDgyBR')
    .then(response => {
      console.log(response.data);
      setPictures(response.data)
    })
    .catch(error => {
      console.log ("the data was not returned", error);
    });
  }, []);

  return (
      <div>
          <ImageCard
            key={picture.url}
            url={picture.url}
            title={picture.title}
            explanation={picture.explanation}
            copyright={picture.copyright}
            date={picture.date}
          />
    </div>
  );
    }

export default ImageContainer;