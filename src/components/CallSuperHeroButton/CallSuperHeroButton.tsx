import React from "react";
import useDiceTray from "../../useDiceTray";

interface IProps {
  name: string;
  color: string;
  background: string;
}

const CallSuperHeroButton: React.FC<IProps> = ({ name, color, background }) => {
  const { diceTray, rollDice } = useDiceTray();

  console.log(diceTray, rollDice)
  return (
    <>
      <button
        style={{
          padding: "2rem",
          fontSize: "3rem",
          color: color,
          background: background
        }}
      >
        Click here to call {name}!!!
      </button>
      {diceTray}
    </>
  );
}

export default CallSuperHeroButton;