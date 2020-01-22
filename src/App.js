import React from "react";
import "./App.css";
import ImageContainer from './components/ImageContainer';

function App() {

  //let dateString = '';

  // const [date, set] = useState('');

  // const setDate = dateString => {
  //   set(dateString);
  //   //dateString = dateString;
  // }

  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>
      <ImageContainer/>
    </div>
  );
}

export default App;