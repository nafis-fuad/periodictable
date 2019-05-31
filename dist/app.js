"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const compression_1 = __importDefault(require("compression"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const helmet_1 = __importDefault(require("helmet"));
dotenv_1.default.config({ path: ".env" });
// Controllers (route handlers)
const homeController = __importStar(require("./routes/index"));
// Create Express server
const app = express_1.default();
app.use(helmet_1.default());
// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path_1.default.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(compression_1.default());
app.use(
// express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
express_1.default.static(path_1.default.join(__dirname, "public"), { maxAge: 0 }));
/**
 * Primary app routes.
 */
app.get("/", homeController.index);
exports.default = app;
//# sourceMappingURL=app.js.map