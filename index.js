const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const userRoute = require("./routes/user");
app.use("/users", userRoute);

app.listen(4444, () => {
  console.log("server is running");
});
