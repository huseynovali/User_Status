const { mongoose } = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => console.log("Connection Db !"))
    .catch((err) => console.log("error:", err));
};

module.exports = dbConnect;
