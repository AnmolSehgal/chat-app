import { messageInfo } from "./../../../../backend/index";
import { updateMessageList } from "./../action/index";
import { messages, userInfo } from "../types";
import { addUserToChatroomSuccess } from "../action/index";
import { actionTypes } from "../action";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import history from "../history";

const initState: userInfo = {
  userName: "",
  userID: "",
};

const updateMessageInitState: messages = {
  messages: [],
};

const addUserToChatRoomReducer = (
  state = initState,
  action: ReturnType<typeof addUserToChatroomSuccess>
) => {
  switch (action.type) {
    case actionTypes.ADD_USER_TO_CHATROOM_SUCCESS:
      return {
        ...state,
        userName: action.payload.userName,
        userID: action.payload.userID,
      };
    default:
      return { ...state };
  }
};

const updateMessagesReducer = (
  state = updateMessageInitState,
  action: ReturnType<typeof updateMessageList>
) => {
  switch (action.type) {
    case actionTypes.UPDATE_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: [...state.messages, action.payload?.message],
      };
    default:
      return { ...state };
  }
};

export const combineReducer = combineReducers({
  router: connectRouter(history),
  userInfo: addUserToChatRoomReducer,
  messageList: updateMessagesReducer,
});
