import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Components/Button/Button";
import TextInput from "../Components/TextInput/TextInput";
import { addUserToChatroomSuccess } from "../store/action";
import { globalState } from "../store/types";

import "./style.scss";

const HomePage = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="home-container">
        <h1>{"Welcome to Chatroom"}</h1>
        <div className="user-info-container">
          <TextInput
            placeholder={"Enter your name"}
            name={"username"}
            value={userName}
            onChange={(el) => {
              setUserName(el.target.value);
            }}
          />
          <Button
            name="enter"
            onClick={() => {
              if (userName && userName.length > 0)
                dispatch(
                  addUserToChatroomSuccess({
                    userName,
                    userID: crypto.randomUUID(),
                  })
                );
            }}
          >
            Enter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
