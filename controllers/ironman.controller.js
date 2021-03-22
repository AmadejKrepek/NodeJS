const db = require("../models");
const Athlete = db.ironman;

// Create and Save a new Athlete
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const athlete = new Athlete({
    name: req.body.name,
    country: req.body.country,
    runDistance: req.body.runDistance
  });

  // Save Tutorial in the database
  athlete
    .save(athlete)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all ironmans from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

  Athlete.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ironmans."
      });
    });
};

// Find a single Athlete with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Athlete.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Tutorial with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id=" + id });
    });
};

// Update a Athlete by the id in the request
exports.update = (req, res) => {

};

// Delete a Athlete with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all ironmans from the database.
exports.deleteAll = (req, res) => {

};

// Find all published ironmans
exports.findAllPublished = (req, res) => {

};