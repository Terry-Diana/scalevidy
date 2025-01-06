import React from "react";
import "../Styles/Footer.css";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>ScaleVidy &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};
