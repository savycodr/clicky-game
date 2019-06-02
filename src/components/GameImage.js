import React from 'react';

function GameImage(props) {
  return (
    <div className="row">
      {props.images.map(image => (
        <div className="col-md-3">
          <img src={image.url} className="bird img-thumbnail" alt={image.alt} data-clicked={image.clicked}  onClick={() => props.handleClick(image.id)} />
        </div>
      ))}
    </div>

  );
}

export default GameImage;
