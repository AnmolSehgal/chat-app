import { createContext, useContext } from "react";
import * as socketio from "socket.io-client";

export type socketContextType = {
  socket: socketio.Socket;
};
export const socket = socketio.connect("http://localhost:4001", {
  forceNew: true,
});

const SocketContext = createContext<socketContextType>({ socket: socket });

export const useSocketContext = (): socketContextType =>
  useContext(SocketContext);

export const SocketProvider = SocketContext.Provider;
