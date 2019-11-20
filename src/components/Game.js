import React from "react";
import Board from "./Board";
import styled from "@emotion/styled";

const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const GameInfo = styled.div`
  margin-left: 20px;
`;

const Ol = styled.ol`
  padding-left: 30px;
`;

export default function Game() {
  return (
    <GameContainer>
      <Board />
      <GameInfo>
        <div>{/* status */}</div>
        <Ol>{/* TODO */}</Ol>
      </GameInfo>
    </GameContainer>
  );
}
