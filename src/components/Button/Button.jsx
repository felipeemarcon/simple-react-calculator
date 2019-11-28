import React from "react";

import "./Button.css";

const Button = props => {
  const { operation, double, triple } = props;

  const handleClasses = () => {
    let classes = "button ";

    classes += operation ? "operation" : "";
    classes += double ? "double" : "";
    classes += triple ? "triple" : "";

    return classes;
  };

  return (
    <button
      onClick={() => props.click && props.click(props.label)}
      className={handleClasses()}
    >
      {props.label}
    </button>
  );
};

export default Button;
