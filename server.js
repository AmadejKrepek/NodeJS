import express from "express";
import { json, urlencoded } from "body-parser";
import cors from "cors";
import routes from "./routes/ironman.routes";
import routes1 from "./routes/ironman70.routes";
import routes2 from "./routes/ultra.routes";

const app = express();
/*
var corsOptions = {
  origin: "http://localhost:3001"
};
*/
//app.use(cors(corsOptions));
app.use(cors());

// parse requests of content-type - application/json
app.use(json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }));

import { mongoose, url } from "./models/indexIronMan";
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to API." });
});

routes(app);
routes1(app);
routes2(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});