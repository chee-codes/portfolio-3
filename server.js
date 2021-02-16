const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>HELLO THERE</h1>");
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("Server listening on http://localhost:" + PORT);
});
