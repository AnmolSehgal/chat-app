import { ButtonHTMLAttributes } from "react";
import "./Button.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button className={"btn"} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
