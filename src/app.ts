import compression from "compression";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import helmet from "helmet";

dotenv.config({ path: ".env" });

// Controllers (route handlers)
import * as homeController from "./routes/index";

// Create Express server
const app = express();

app.use(helmet());

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(compression());

app.use(
  // express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
  express.static(path.join(__dirname, "public"), { maxAge: 0 })
);

/**
 * Primary app routes.
 */
app.get("/", homeController.index);

export default app;
