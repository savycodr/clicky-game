import React from 'react';

class GameImage extends React.Component {

  state = {
    clicked: false
  };

  // handleClick changes the state of this image
  handleClick = () => {
    // We always use the setState method to update a component's state
    this.state.clicked ?  resetGame() : this.setState({ clicked: true});
    // shuffle location
  };

  resetGame() {
    console.log("You already clicked this image");
  };

  render() {
    <div className="row">
      {props.images.map(image => (
        <div className="col-md-3">
          <img src={image.url} className="bird img-thumbnail" alt={image.alt}
          onClick={this.handleClick} />
        </div>
      ))}
    </div>
  };

  export default GameImage;
