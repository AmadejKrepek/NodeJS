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
          err.message || "Some error occurred while creating the Athlete."
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
          err.message || "Some error occurred while retrieving athletes."
      });
    });
};

// Find a single Athlete with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Athlete.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Athlete with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Athlete with id=" + id });
    });
};

// Update a Athlete by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Athlete.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Athlete with id=${id}. Maybe Athlete was not found!`
        });
      } else res.send({ message: "Athlete was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Athlete with id=" + id
      });
    });
};

// Delete a Athlete with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Athlete.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Athlete with id=${id}. Maybe Athlete was not found!`
        });
      } else {
        res.send({
          message: "Athlete was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Athlete with id=" + id
      });
    });
};

// Delete all ironmans from the database.
exports.deleteAll = (req, res) => {
  Athlete.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Tutorials were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

// Find all published ironmans
exports.findAllPublished = (req, res) => {

};