import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Components/Button/Button";
import MessageListComponent from "../Components/MessageListComponent/MessageListComponent";
import { useSocketContext } from "../Components/SocketContext/useSocket";
import TextArea from "../Components/TextArea/TextArea";
import { ROOM_ID } from "../constant";
import { updateMessageList } from "../store/action";
import { globalState, messageInfo } from "../store/types";

import "./style.scss";

const ChatroomPage = () => {
  const [text, setText] = useState<string>("");
  const { socket } = useSocketContext();
  const state = useSelector((state: globalState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("received-message", (data: messageInfo) => {
      dispatch(updateMessageList(data));
    });
  }, [socket, dispatch]);

  return (
    <div className="container">
      <div className="chat-container">
        <h1>{"Welcome to Chatroom"}</h1>
        <div>
          <div className="messages-container">
            <MessageListComponent
              messages={state.messageList.messages.map((messageData) => {
                return {
                  userName: state.userInfo.userName,
                  meUser: state.userInfo.userID === messageData.userID,
                  text: messageData.message,
                  date: messageData.date,
                };
              })}
            />
          </div>
          <div className="text-box">
            <TextArea
              placeholder={"Text Message"}
              onChange={(el) => {
                setText(el.target.value);
              }}
            />
            <div className="text-box-btn">
              <Button
                name="Send"
                onClick={() => {
                  socket.emit("send-message", {
                    roomID: ROOM_ID,
                    userName: state.userInfo.userName,
                    userID: state.userInfo.userID,
                    message: text,
                  });

                  dispatch(
                    updateMessageList({
                      userName: state.userInfo.userName,
                      userID: state.userInfo.userID,
                      message: text,
                      date: new Date(),
                    })
                  );
                }}
              >
                {"Send"}
              </Button>
              <Button name="send-file">{"Send file"}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatroomPage;
