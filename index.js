import express from "express";
// const Express =require("express"); which we were using earlier,but to use above method it need to be mentioned in package.json file type =module

import Connection from "./database/db.js";
import routes from "./routes/route.js";
import cors from "cors";
import path from "path";

const __dirname=path.resolve();
// initialize the express
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true })); // to change the parsed url to original url
app.use(express.json({ extended: true })); // as we are sending  the json format file
app.use("/", routes);
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {     res.status(500).send(err);
    }
  );
});

const PORT = process.env.PORT ||8000;
Connection();

// to call the server
app.listen(PORT, () => console.log("Server is listening on port " + PORT));
