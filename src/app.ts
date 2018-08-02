import compression from "compression";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import helmet from "helmet";

dotenv.config({ path: ".env" });

// Controllers (route handlers)
import * as aboutController from "./routes/about";
import * as homeController from "./routes/index";
import * as periodicTableController from "./routes/periodicTable";
import * as experimentController from "./routes/experiments";

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
app.get("/about", aboutController.about);
app.get("/periodicTable", periodicTableController.periodicTable);
app.get("/experiment", experimentController.experiment);

export default app;