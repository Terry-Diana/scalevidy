import React from "react";
import "../Styles/Header.css";
import logo from "../img/scalevidylogo.png";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={logo} alt="ScaleVidy Logo" className="header-logo" />
    </header>
  );
};
