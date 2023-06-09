import Link from "next/link";
import React from "react";

const Button = ({ children, type, onClick,className }) => {
  let buttonStyles;
  if (type === "filled") {
    buttonStyles = "bg-blue text-white";
  } else if (type === "outlined") {
    buttonStyles = "bg-transparent text-blue";
  } else if (type === "white-filled") {
    buttonStyles = "bg-white text-blue";
  }
  return (
    <button
      className={`py-2 px-4 rounded w-fit uppercase border-2 border-blue ${buttonStyles} ${className}`}
      onClick = {onClick}
    >
      {children}
    </button>
  );
};

export default Button;
