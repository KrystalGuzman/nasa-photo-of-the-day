import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard"
import axios from "axios";

function ImageContainer({date}) {
const [picture, setPictures] = useState([]);
var today = new Date();
var todayString = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate();
const [dateSelected, setDate] = useState(todayString);

  useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=WiYGp5uin6CV4gjqQMNWA0rlKbcmhVIJkpaDgyBR&date=${dateSelected}`)
    .then(response => {
      console.log(response.data);
      setPictures(response.data)
    })
    .catch(error => {
      console.log ("the data was not returned", error);
    });
  },  [dateSelected]);

	const change = (e) => {
		console.log(e.target.value);
		setDate(e.target.value);
  };
  
  return (
          <div className="imagecontainer">
			
			<form>
				<label for="date">Choose a Day</label>
				<input id="date" type="date" onChange={change} value={date} />
			</form>
      <ImageCard data={picture} />
		</div>
  );
}

export default ImageContainer;