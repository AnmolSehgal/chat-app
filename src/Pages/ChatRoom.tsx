import Button from "../Components/Button/Button";
import MessageListComponent from "../Components/MessageListComponent/MessageListComponent";
import TextArea from "../Components/TextArea/TextArea";

import "./style.scss";

const ChatroomPage = () => {
  return (
    <div className="container">
      <div className="chat-container">
        <h1>{"Welcome to Chatroom"}</h1>
        <div>
          <div className="messages-container">
            <MessageListComponent messages={[]} />
          </div>
          <div className="text-box">
            <TextArea placeholder={"Text Message"} />
            <div className="text-box-btn">
              <Button name="Send">{"Send"}</Button>
              <Button name="send-file">{"Send file"}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatroomPage;
