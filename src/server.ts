import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>hello world</h1>");
});

app.listen(3000, () => {
    console.log("server's running on localhost:3000");
});