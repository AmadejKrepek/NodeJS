import express from "express";

import routes from "../NodeJS/routes/recipe";

const app = express();

const port = 3000;

app.use(express.json());

routes(app);

app.use( (req, res, next) => {

    res.status(404);
    
    if (req.accepts("json")) {

        res.send({error: true, message: "Route Not Found"});

        return;
    }
});

app.listen(port, () => {

    console.log("app is listening on port 3000");

});