import React from "react";

function CompButton({ children, onClick }) {
  const btnStyle = {
    backgroundColor: "#61dafb",
    color: "white",
    border: "1px solid #61dafb",
    padding: "18px",
  };
  return (
    <button style={btnStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default CompButton;
