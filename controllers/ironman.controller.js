const db = require("../models");
const ironman = db.ironman;

// Create and Save a new ironman
exports.create = (req, res) => {

};

// Retrieve all ironmans from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

  ironman.find(condition)
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

// Find a single ironman with an id
exports.findOne = (req, res) => {

};

// Update a ironman by the id in the request
exports.update = (req, res) => {

};

// Delete a ironman with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all ironmans from the database.
exports.deleteAll = (req, res) => {

};

// Find all published ironmans
exports.findAllPublished = (req, res) => {

};