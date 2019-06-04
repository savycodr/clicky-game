import React from 'react';

function GameImage(props) {
  return (
    <div>
      {props.images.map(image => (
          <img src={image.url} className="bird img-thumbnail" alt={image.alt} data-clicked={image.clicked}  onClick={() => props.handleClick(image.id)} />
      ))}
    </div>

  );
}

export default GameImage;
