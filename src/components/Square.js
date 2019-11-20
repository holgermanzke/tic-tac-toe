import React from "react";
import styled from "@emotion/styled";

export const SquareBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 5px;
`;

const Button = styled.button`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
  :focus {
    outline: none;
  }
`;

export default function Square({ value, onClick }) {
  // console.log("rendered square with value", value);
  // const [value, setValue] = useState(null);

  return <Button onClick={onClick}>{value}</Button>;
}
