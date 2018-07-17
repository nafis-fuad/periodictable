import express from "express";
import path from "path";
import compression from "compression";
import dotenv from "dotenv";

dotenv.config({path: ".env"});

// Controllers (route handlers)
import * as homeController from "./routes/index";
import * as aboutController from "./routes/about";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(compression());

app.use(
    express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

/**
 * Primary app routes.
 */
app.get("/", homeController.index);
app.get("/about", aboutController.about);

export default app;