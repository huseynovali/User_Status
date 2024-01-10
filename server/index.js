const express = require("express");
const cors = require("cors");
const http = require("http");
const dotenv = require("dotenv");
const dbConnect = require("./connection/dbConnect");
const UserRouter = require("./router/UserRourter");
const { initializeSocket } = require("./service/socketIo");


dotenv.config();
dbConnect();
const app = express();

app.use(cors());
app.use(express.json());

const httpServer = http.createServer(app);


initializeSocket(httpServer);

app.use('/user', UserRouter);

const PORT = process.env.PORT || 4000;

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
