const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("<h1>Welcome to my servers!</h1>");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
