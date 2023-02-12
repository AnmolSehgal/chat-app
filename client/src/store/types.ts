import { MessageComponentProps } from "../Components/MessageComponent/MessageComponent";
export type MessagesList = {
  messages: MessageComponentProps[];
};

export type userDetails = { userName: string };
export type userInfo = { userName: string; userID: string };

export type messageInfo = userInfo & {
  message: string;
  date: Date;
};

export type messages = {
  messages: messageInfo[];
};

export type globalState = {
  userInfo: userInfo;
  messageList: messages;
};
