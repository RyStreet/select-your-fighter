import React from "react";

export default function Select({ currentCharacter, changeCharacter }) {
  return (
    <div className="selectContainer ">
      <div
        id="writer"
        onClick={() => changeCharacter("Writer")}
        className="charButtons"
      >
        
        Writer
      </div>

      <div
        id="coder"
        onClick={() => changeCharacter("Coder")}
        className="charButtons"
      >
        Coder
      </div>

      <div
        id="coordinator"
        onClick={() => changeCharacter("Coordinator")}
        className="  charButtons"
      >
        Coordinator
      </div>

    </div>
  );
}
