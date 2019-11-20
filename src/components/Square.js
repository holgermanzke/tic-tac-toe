import React from "react";

export default function Square({ value, onClick }) {
  // console.log("rendered square with value", value);
  // const [value, setValue] = useState(null);
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}
