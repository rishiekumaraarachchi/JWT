const express = require("express");
const authRoute = require("./routes/auth");

const app = express();
app.use(express.json());

app.use("/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
