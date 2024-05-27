import React from "react";
import "./checkPoint.scss";
const CheckPoint = ({ text }) => {
  return (
    <div className="checkPoint">
      <div className="checkPoint__container">
        <p className="checkPoint__text">{text}</p>
      </div>

      <div className="checkPoint__triangle"></div>

      <div className="checkPoint__circle"></div>
    </div>
  );
};

export default CheckPoint;
