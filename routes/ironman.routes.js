module.exports = app => {
    const ironman = require("../controllers/ironman.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", ironman.create);
  
    // Retrieve all ironman
    router.get("/", ironman.findAll);
  
    // Retrieve all published ironman
    router.get("/published", ironman.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", ironman.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", ironman.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", ironman.delete);
  
    // Create a new Tutorial
    router.delete("/", ironman.deleteAll);
  
    app.use('/api/ironman', router);
  };