"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get("/", function (req, res) {
    res.send("<h1>hello world</h1>");
});
app.listen(3000, function () {
    console.log("server's running on localhost:3000");
});
//# sourceMappingURL=server.js.map