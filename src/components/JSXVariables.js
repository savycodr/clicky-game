import React from "react";

let name = "Heather";
let message = "truly awesome";
function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name} </h1>
          <h2>My name has {name.length} letters</h2>
          <h2>I think React {message}</h2>
          <h2>My name without vowels is {name.replace(/[aeiou]/ig,'')}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
