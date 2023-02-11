import "./MessageComponent.scss";
export type MessageComponentProps = {
  text: string;
  userName: string;
  meUser?: boolean;
};

const MessageComponent = ({
  text,
  userName,
  meUser,
}: MessageComponentProps) => {
  const bgColor = meUser ? "#5fc9f8" : "#53d769";
  return (
    <div className="message-container" style={{ backgroundColor: bgColor }}>
      <div className={"message-container-user-name"}>{userName}</div>
      <div className={"message-container-user-text"}>{text}</div>
    </div>
  );
};

export default MessageComponent;
