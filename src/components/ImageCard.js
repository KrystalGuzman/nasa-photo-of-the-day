import React, {useState} from "react";
import { Collapse, CardBody, Card } from 'reactstrap';
import styled from "styled-components";

const ImageCard = props => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);

    const CardContainer =styled.div`
background: gray;
color: black;
width: 100%;
height: 100%;
align-items: center;
justify-content: space-between;
margin-bottom: 20px;
`
const CardImg =styled.img`
width: 500px;
height: 500px;
object-fit: scale;
flex-shrink: 2;
padding: 25px;
&:hover {
  width: 50%;
  height:50%;
`
const InfoButton = styled.button`
width: 100px;
height: 50px;
background: #2a2223;
color:white;
border:0;
margin:5px 10px;
&:hover {
  background: white;
  color: #2a2223;
}
`

  return (
    <CardContainer>
      <h2>{props.data.title}</h2>
      
      <InfoButton color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>More Information</InfoButton>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody><p>{props.data.explanation}</p>
        <p>{props.data.copyright}</p>
        <p>{props.data.date}</p>
        </CardBody>
        </Card>
      </Collapse>
      <br></br>
      <CardImg src={props.data.hdurl} alt="" />
      
    </CardContainer>
  );
};
export default ImageCard;