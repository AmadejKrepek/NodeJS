import {create, findAll, findOne, update, deleteOne, deleteAll, findAllPublished} from "../controllers/ironman.controller.js";

export default app => {  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", create);
  
    // Retrieve all ironman
    router.get("/", findAll);
  
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
  
    app.use('/api/ironman', router);
  };