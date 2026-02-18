const express = require("express");
const dotenv = required("dotenv");
dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () => {
console.log(`Server is runnong on PORT ${PORT}`)
} );

app.get("/", (req, res) => {
  res.send("Shivani  .. Backend is running ")
});


