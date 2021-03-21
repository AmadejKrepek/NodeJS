import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./models/index.js"
import routes from "./routes/tutorial.routes.js";

const app = express();

let corsOptions = {
    origin: "http:localhost:3001"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//================================================================================
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch((err) => {
        console.log("Cannot connect to the database!" , err);
        process.exit();
    });
//================================================================================

// simple route
app.get("/", (req, res) => {
    res.json({ messasge: "Welcome To My Rest API." });
});

routes(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
})