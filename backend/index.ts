import express from "express";
import cors from "cors";
import http from "http";

const { Server } = require("socket.io");

export type userInfo = {
  userID: string;
  userName: string;
  roomID: string;
  date: Date;
};

export type messageInfo = userInfo & {
  message: string;
  date: Date;
};

const port = process.env.PORT || 4001;

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket: any) => {
  console.log("connection secured");
  socket.on("join_room", (data: userInfo) => {
    const { roomID } = data; // Data sent from client when join_room event emitted
    socket.join(roomID); // Join the user to a socket room
  });

  socket.on("send-message", (data: messageInfo) => {
    socket.broadcast.emit("received-message", { ...data });
  });

  // We can write our socket event listeners in here...
});

server.listen(port, () => console.log(`Server listening on port ${port}`));
