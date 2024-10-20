import { errorHandler } from "./middlewares/errorhandler";
import { unknownEndpoint } from "./middlewares/unknownEndpoint";
import courseRoutes from "./routes/courses.routes";
import lessonRoutes from "./routes/lessons.router";
import moduleRoutes from "./routes/modules.router";
import express, { Application } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { swaggerOptions } from "./middlewares/swagger";
import { requestLogger } from "./middlewares/logger";
import { logRequests } from "./middlewares/loggers";
import rateLimit from "express-rate-limit";

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again after 15 minutes",
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

app.use(express.json());

app.use(requestLogger);
app.use(logRequests);

app.get("/api", (request, response) => {
  response.send("<h1>Welcome to my servers!</h1>");
});

app.use("/api/courses", courseRoutes);
app.use("/api/modules", moduleRoutes);
app.use("/api/lessons", lessonRoutes);

const PORT = 3001;

const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(unknownEndpoint);
app.use(errorHandler);

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

export default app;
