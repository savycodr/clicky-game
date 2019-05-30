import React from 'react';
import logo from './logo.svg';
import './App.css';
// import './components/JSXVariables'
import JSXVariables from "./components/JSXVariables";
import "./styles/Header.css";



function App() {
  return (
    <div className="App">

      <div className="fluid-container intro ">
        <div className="row">
          <div className="col-md-4 align-self-end">
            <h3>Click An Image To Begin</h3>
          </div>
          <div className="col-md-4 align-self-center">
            <h1>Clicky Bird</h1>
          </div>
          <div className="col-md-4 align-self-end">
            <h3>Score: 0 | Top Score: 3</h3>
          </div>
        </div>
      </div>
      <div className="fluid-container directions">
      <h3>Click on an image to earn points, but don't click on any more than once!</h3>
      </div>

      <div className="fluid-container game">
        <div className="row">
          <div className="col-md-3">
            <img src="/assets/img/adler-2386314_640.jpg" className="bird img-thumbnail" alt="bird1" />
          </div>
          <div className="col-md-3">
            <img src="/assets/img/animal-1850868_640.jpg" className="bird img-thumbnail" alt="bird1" />
          </div>
          <div className="col-md-3">
            <img src="/assets/img/bar-tailed-godwit-944883_640.jpg" className="bird img-thumbnail" alt="bird1" />
          </div>
          <div className="col-md-3">
            <img src="/assets/img/blue-jay-3734030_640.jpg" className="bird img-thumbnail" alt="bird1" />
          </div>
        </div>
      </div>

      <div className="fluid-container footer ">
        </div>

      <img src={logo} className="App-logo" alt="logo" />
      <JSXVariables />
    </div>
  );
}

export default App;
