import React from "react";

interface Props {
  buttonPress: () => void;
  color?: "primary" | "secondary" | "btn-danger";
}

const Button = ({ buttonPress, color = "primary" }: Props) => {
  return (
    <div>
      <div>
        <button
          type="button"
          className={"btn " + color}
          onClick={() => {
            buttonPress();
          }}
        >
          Console Log
        </button>
      </div>
    </div>
  );
};

export default Button;
