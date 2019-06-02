import React, { Component } from "react";
import './App.css';
import JSXVariables from "./components/JSXVariables";
import GameImage from "./components/GameImage";
import "./styles/Header.css";

class App extends Component {

  state = {
    pictures: [
      {
        id: 1,
        url: "/assets/img/adler-2386314_640.jpg",
        alt: "bird1",
        clicked: false
      },
      {
        id: 2,
        url: "/assets/img/animal-1850868_640.jpg",
        alt: "bird2",
        clicked: false
      },
      {
        id: 3,
        url: "/assets/img/bar-tailed-godwit-944883_640.jpg",
        alt: "bird3",
        clicked: false
      },
      {
        id: 4,
        url: "/assets/img/blue-jay-3734030_640.jpg",
        alt: "bird4",
        clicked: false
      }
    ],
    score: 0,
    highScore: 0
  };


  // handleClick changes the state of this image
  handleClick = id => {

    // We always use the setState method to update a component's state
    // this.state.pictures[id-1].clicked ?  this.resetGame() : 
    // (this.setState({ this.state.pictures[id-1].clicked: true),
    //   this.setState({score: this.state.score++}));

    let pic = this.state.pictures[id - 1];

    // HLS this works but we still need to modify state of picture to clicked: true
    pic.clicked ? this.resetGame() : this.goodPick(id);



    // shuffle location
  };

  // This means we had a successful click
  goodPick = id => {

    // increase the score
    this.setState({ score: this.state.score + 1 });

    // make a copy of the array
    let newPictures = this.state.pictures.slice();
    // modify the picture 
    newPictures[id - 1].clicked = true;
    // set state to the new pictures array with the modified value
    this.setState({ pictures: newPictures });

  }

  resetGame() {
    console.log("You already clicked this image");
    // reset score to 0
    this.setState({ score: 0 });
    // reset all pictures.clicked to false
    // this.state.pictures.map(pic => (
    //   pic.clicked = false;
    // ));

    // make a copy of the array
    let newPictures = this.state.pictures.slice();
    this.state.pictures.map(pic => (
      pic.clicked = false
    ));
    // modify the picture 
    // set state to the new pictures array with the modified value
    this.setState({ pictures: newPictures });

  };


  render() {
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
              <h3>Score: {this.state.score} | Top Score: 3</h3>
            </div>
          </div>
        </div>
        <div className="fluid-container directions">
          <h3>Click on an image to earn points, but don't click on any more than once!</h3>
        </div>

        <div className="fluid-container game">
          <GameImage images={this.state.pictures}
            handleClick={this.handleClick}></GameImage>
        </div>

        <div className="fluid-container footer ">
        </div>

        <JSXVariables />
      </div>
    );
  }
}
export default App;
