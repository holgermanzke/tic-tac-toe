import React, { useState } from "react";
import Square from "./Square";
import { calculateWinner } from "../utils/helpers.js";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  // console.log(xIsNext);

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner is: ${winner}`;
  } else {
    status = xIsNext ? "Next Player: X" : "Next Player: O";
  }
  function handleClick(index) {
    // console.log(index);
    const squaresClone = [...squares];
    if (!winner && !squaresClone[index]) {
      if (xIsNext) {
        squaresClone[index] = "X";
        setXIsNext(false);
      } else {
        squaresClone[index] = "O";
        setXIsNext(true);
      }
      setSquares(squaresClone);
    }
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  );
}
