import React from "react";
import '../App.css'
const Square = ({ id,val, chooseSquare }) => {
  return (
    <div className="square" onClick={chooseSquare} id={id}>
      {val}
    </div>
  );
};

export default Square;
