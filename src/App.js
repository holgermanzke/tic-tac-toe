import React from "react";
import Game from "./components/Game";
import styled from "@emotion/styled";

const AppStyle = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  padding: 20px;
  font-size: calc(10px + 2vmin);
  color: white;
`;

function App() {
  return (
    <AppStyle>
      <h1>Tic Tac Toe</h1>

      <Game />
    </AppStyle>
  );
}

export default App;
