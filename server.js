import express from "express";
import routes from "./routes/athlete.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port, () => {
    console.log("Your server is running on port: " + port);
})