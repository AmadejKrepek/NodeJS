import {create, findAll, findOne, update, deleteOne, deleteAll, findAllPublished, findDNF, findTop100, findTop10} from "../controllers/ultra.controller";

export default app => {  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", create);
  
    // Retrieve all ironman
    router.get("/", findAll);

    router.get("/DNF", findDNF);

    router.get("/top100", findTop100);

    router.get("/top10", findTop10);
  
    // Retrieve all published ironman
    router.get("/published", findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", findOne);
  
    // Update a Tutorial with id
    router.put("/:id", update);
  
    // Delete a Tutorial with id
    router.delete("/:id", deleteOne);
  
    // Create a new Tutorial
    router.delete("/", deleteAll);
  
    app.use('/api/ultras', router);
  };