import MessageComponent, {
  MessageComponentProps,
} from "../MessageComponent/MessageComponent";
import "./MessageListComponent.scss";
export type MessageListComponentProps = {
  messages: (MessageComponentProps & { date: Date })[];
};

const MessageListComponent = ({ messages }: MessageListComponentProps) => {
  return (
    <div className="message-list-container">
      {messages.map((message) => {
        return (
          <div
            className={
              message.meUser ? "sent-chat-message" : "received-chat-message"
            }
          >
            <MessageComponent {...message} />
          </div>
        );
      })}
    </div>
  );
};

export default MessageListComponent;
