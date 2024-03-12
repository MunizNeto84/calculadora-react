import React from "react";
import "./Button.css";

export default (props) => {
  let colors = "button ";
  colors += props.operation ? "operation" : "";
  colors += props.double ? "double" : "";
  colors += props.triple ? "triple" : "";
  return (
    <button
      onClick={(e) => props.click && props.click(props.label)}
      className={colors}
    >
      {props.label}
    </button>
  );
};
