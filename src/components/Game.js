import React from "react";
import Board from "./Board";
import styled from "@emotion/styled";

const GameInfo = styled.div`
  margin-left: 20px;
`;

const Ol = styled.ol`
  padding-left: 30px;
`;

export default function Game() {
  return (
    <div>
      <Board gameSize={9} />
      <GameInfo>
        <div>{/* status */}</div>
        <Ol>{/* TODO */}</Ol>
      </GameInfo>
    </div>
  );
}
