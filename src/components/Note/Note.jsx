import React from "react";

import "./note.scss";

const Note = ({ text }) => {
  return (
    <div className="note">
      <p>{text}</p>
    </div>
  );
};

export default Note;
