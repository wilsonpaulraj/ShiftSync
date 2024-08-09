import React from "react";

const HamburgerIcon = ({ isOpen, onClick }) => {
  const lineStyles = {
    width: "24px",
    height: "2px",
    backgroundColor: "blue",
    margin: "5.5px 0",
    transition: "transform 0.3s ease",
    borderRadius: "30px",
  };

  return (
    <div
      className="flex cursor-pointer items-center text-blue-800"
      onClick={onClick}
    >
      <div className="relative h-6 w-6">
        <div
          style={{
            ...lineStyles,
            width: "24px",
            height: "2px",
            transform: isOpen ? "rotate(44deg) translate(5.5px, 5px)" : "",
          }}
        />
        <div
          style={{
            ...lineStyles,
            width: "20px",
            height: "2px",
            transform: isOpen ? "scale(0)" : "",
          }}
        />
        <div
          style={{
            ...lineStyles,
            width: "24px",
            height: "2px",
            transform: isOpen ? "rotate(-47deg) translate(6px, -5px)" : "",
          }}
        />
      </div>
    </div>
  );
};

export default HamburgerIcon;
