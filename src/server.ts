import express from "express";
import connection from "./database/connection";

const app = express();
connection.then(() => {
    console.log("connected with database")
})

app.get("/", function (req, res) {
  res.send("Hello World");
});
console.log("Server started successfully");

app.listen(3000);
