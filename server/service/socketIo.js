const { Server } = require("socket.io");
const User = require("../model/UserModel");

function initializeSocket(httpServer) {
  const io = new Server(httpServer, {
    cors: {
      origin: process.env.CLIENT_PORT,
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("user connect 1");
    socket.on("newUser", async (UserName) => {
      console.log("user connect");
      let user = await User.findOne({ name: UserName });
      if (user) {
        user.SocketId = socket.id;
        user.status = true;
        user.save();
      }
    });

    socket.on("disconnect", async () => {
      console.log("user disconnect");
      let user = await User.findOne({ SocketId: socket.id });
      if (user) {
        user.SocketId = "";
        user.status = false;
        user.save();
      }
    });
  });
}

module.exports = { initializeSocket };
