import courseRoutes from "./routes/courses.routes";

import express, { Application } from "express";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  response.send("<h1>Welcome to my servers!</h1>");
});

app.use("/api", courseRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
