import React, { InputHTMLAttributes } from "react";
import "./TextInput.scss";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  name: string;
}

const TextInput = (props: InputProps): JSX.Element => {
  return (
    <div className="text-input-container">
      <input {...props} className={"text-input"} type={"text"} />
    </div>
  );
};

export default TextInput;
