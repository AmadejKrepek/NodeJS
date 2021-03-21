import ozr from "../controllers/tutorial.controller.js";

export default app => {
    var router = require("express").Router();

    // Rtrieve a single TUtorial with id
    router.get("/", ozr.findAll);

    app.use("/api/athlete", router);
}