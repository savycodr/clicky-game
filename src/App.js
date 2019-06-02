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

    // HLS this doesn't work because we shuffle the location
    // How do we find the correct picture?
    // let pic = this.state.pictures[id - 1];

    let pic = this.state.pictures.find(o => o.id === id);

    pic.clicked ? this.resetGame() : this.goodPick(id);

    // shuffle location, Can we simply shuffle the array?
    // make a copy of the array
    let newPictures = this.state.pictures.slice();
    // HLS keep working on this
    // shuffle the items in the array 
    let newPictures1 = this.shuffle(newPictures);
    console.log(newPictures1);

    // set state to the new pictures array with the modified value
    this.setState({ pictures: newPictures1 });


  };


  // This means we had a successful click
  goodPick = id => {

    // increase the score
    this.setState({ score: this.state.score + 1 });

    // make a copy of the array
    let newPictures = this.state.pictures.slice();
    // HLS this doesn't work because we shuffle the array
    // modify the picture 
    // newPictures[id - 1].clicked = true;
    let pic = newPictures.find(o => o.id === id);

    // HLS hopefully this is a reference to the element in the array
    pic.clicked = true;

    // set state to the new pictures array with the modified value
    this.setState({ pictures: newPictures });

  }

  resetGame() {
    console.log("You already clicked this image");
    // reset score to 0
    this.setState({ score: 0 });

    // reset all pictures.clicked to false
    // make a copy of the array
    let newPictures = this.state.pictures.slice();
    this.state.pictures.map(pic => (
      pic.clicked = false
    ));
    // modify the picture 
    // set state to the new pictures array with the modified value
    this.setState({ pictures: newPictures });

  };

  // Fisher-Yates (aka Knuth) Shuffle.
 shuffle = array => {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element... Once element is picked the currentIndex is reduced and so is the range of randomIndex
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
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
