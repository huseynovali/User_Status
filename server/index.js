
const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const dotenv = require("dotenv");
const dbConnect = require("./connection/dbConnect");

dotenv.config();
dbConnect();
const app = express();

app.use(cors());
app.use(express.json());


const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: process.env.CLIENT_PORT,
    methods: ["GET", "POST"],
  },
});

// io.on("connection", (socket) => {
//   socket.on("newUser", async (UserName) => {
//     console.log("user connect");
//     let user = await User.findOne({ name: UserName });
//     if (user) {
//       user.SocketId = socket.id;
//       user.status = true;
//       user.save();
//     }
//   });

//   socket.on("disconnect", async () => {
//     console.log("user disconnect");
//     let user = await User.findOne({ SocketId: socket.id });
//     if (user) {
//       user.SocketId = "";
//       user.status = false;
//       user.save();
//     }
//   });
// });

const PORT = process.env.PORT || 4000;

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
