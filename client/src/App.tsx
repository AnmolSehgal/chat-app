import React from "react";
import { useSelector } from "react-redux";
import "./App.scss";
import { socket, SocketProvider } from "./Components/SocketContext/useSocket";
import ChatroomPage from "./Pages/ChatRoom";
import HomePage from "./Pages/HomePage";
import { globalState } from "./store/types";

function App() {
  const userInfo = useSelector((state: globalState) => state.userInfo);

  console.log(userInfo);

  return (
    <SocketProvider value={{ socket: socket }}>
      {userInfo?.userName ? <ChatroomPage /> : <HomePage />}
    </SocketProvider>
  );
}

export default App;
