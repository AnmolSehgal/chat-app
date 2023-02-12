import { messageInfo, userInfo } from "../types";

export const actionTypes = {
  ADD_USER_TO_CHATROOM_REQUEST: "ADD_USER_TO_CHATROOM_REQUEST",
  ADD_USER_TO_CHATROOM_SUCCESS: "ADD_USER_TO_CHATROOM_SUCCESS",
  ADD_USER_TO_CHATROOM_FAILURE: "ADD_USER_TO_CHATROOM_FAILURE",
  UPDATE_MESSAGES_SUCCESS: "UPDATE_MESSAGES_SUCCESS",
} as const;

export const addUserToChatroomSuccess = (details: userInfo) => {
  return {
    type: actionTypes.ADD_USER_TO_CHATROOM_SUCCESS,
    payload: {
      ...details,
    },
  };
};

export const updateMessageList = (message: messageInfo) => {
  return {
    type: actionTypes.UPDATE_MESSAGES_SUCCESS,
    payload: { message },
  };
};
