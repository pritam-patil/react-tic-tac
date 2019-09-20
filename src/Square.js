import React from "react";
import "./styles.css";

const Square = ({ value = "", onClick }) => {
  if (!!value && value[0] === "D") {
    return (
      <button className="board-square" onClick={onClick}>
        <del>{value[1]}</del>
      </button>
    );
  }

  return (
    <button className="board-square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
