import express from "express";
import { connectionSource } from '../ormconfig';

const app = express();

connectionSource.initialize().then(() => {
    console.log("connected with database")
})

app.get("/", function (req, res) {
  res.send("Hello World");
});
console.log("Server started successfully");

app.listen(3000);
