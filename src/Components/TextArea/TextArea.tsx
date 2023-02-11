import { TextareaHTMLAttributes } from "react";
import "./TextArea.scss";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
}

const TextArea = (props: TextAreaProps) => {
  return (
    <div className={"text-area-container"}>
      <textarea className="text-area" {...props} />
    </div>
  );
};

export default TextArea;
