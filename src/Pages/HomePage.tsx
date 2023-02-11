import { useState } from "react";
import Button from "../Components/Button/Button";
import TextInput from "../Components/TextInput/TextInput";
import "./style.scss";

const HomePage = () => {
  const [userName, setUserName] = useState("");
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
              console.log(userName);
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
