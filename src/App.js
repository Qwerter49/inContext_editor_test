import React, {useState} from 'react';
import highlighter from './highlighter.svg'
import eraser from './eraser.svg'
import './App.css';

function App() {

  const [cursor, setCursor] = useState('pointer')

  const changeEraserHeight = (event) => {
    if(event.target.className === "eraser"){
      event.target.className = "eraserClicked"
      document.querySelector('.App').className = "AppEraserClicked"
    } else {
      event.target.className= 'eraser'
      document.querySelector('.AppEraserClicked').className = "App"
    }
  }
  const changeHighlightHeight = (event) => {
    if(event.target.className === "highlighter"){
      event.target.className = "highlighterClicked"
      document.querySelector('.App').className = "AppHighlightClicked"

    } else {
      event.target.className= 'highlighter'
      document.querySelector('.AppHighlightClicked').className = "App"
    }
  }

  return (
    <div className="App">
      <h1>React App</h1>
      <div>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      <div className="editor-container">
        <img src={eraser} className="eraser" onClick={changeEraserHeight} alt="Highlighter Logo"/>
        <img src={highlighter} className="highlighter" onClick={changeHighlightHeight} alt="Highlighter Logo"/>
      </div>
    </div>
  );
}

export default App;
