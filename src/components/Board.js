import React, { useState } from "react";
import Square from "./Square";
import { calculateWinner } from "../utils/helpers.js";
import Status from "./Status";
import styled from "@emotion/styled";

export default function Board({ gameSize }) {
  const [squares, setSquares] = useState(Array(gameSize).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  // console.log(xIsNext);

  const SquareBox = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => Math.sqrt(props.size)}, 1fr);
    grid-template-rows: repeat(${props => Math.sqrt(props.size)}, 1fr);
    grid-gap: 7px;
    /* width: 120px; */
    /* height: 120px; */
  `;

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner is: ${winner}`;
  } else {
    status = xIsNext ? "Next Player: X" : "Next Player: O";
  }
  function handleClick(index) {
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
      <Status>{status}</Status>
      <SquareBox size={gameSize}>
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </SquareBox>
    </div>
  );
}
