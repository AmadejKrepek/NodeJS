import { ironman } from "../models/indexUltra";
const Athlete = ironman;

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

// Create and Save a new Athlete
export function create(req, res) {
  // Validate request
  if (!req.body.Overall) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const athlete = new Athlete({
    Rank: req.body.Rank,
    Overall: req.body.Overall,
    Competitor: req.body.Competitor,
    Country: req.body.Country,
    Age_Category: req.body.Age_Category,
    Swim: req.body.Swim,
    Trans1: req.body.Trans1,
    Bike: req.body.Bike,
    Trans2: req.body.Trans2,
    Run: req.body.Run,
    Finish: req.body.Finish,
    Comment: req.body.Comment
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
}

// Retrieve all ironmans from the database.
export function findAll(req, res) {
  const { page, size, Competitor} = req.query;
  var condition = Competitor ? { Competitor: { $regex: new RegExp(Competitor), $options: "i" } } : {};

  const { limit, offset } = getPagination(page, size);

  Athlete.paginate(condition, { offset, limit })
    .then((data) => {
      res.send({
        totalItems: data.totalDocs,
        ironmans: data.docs,
        totalPages: data.totalPages,
        currentPage: data.page - 1,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ironmans.",
      });
    });
}

// Find a single Athlete with an id
export function findOne(req, res) {
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
}

// Find all overall dnf athletes
export function findDNF(req, res) {
  const { page, size } = req.query;
  var condition = { "Finish": "" }

  const { limit, offset } = getPagination(page, size);

  Athlete.paginate(condition, { offset, limit })
    .then((data) => {
      res.send({
        totalItems: data.totalDocs,
        ironmans: data.docs,
        totalPages: data.totalPages,
        currentPage: data.page - 1,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ironmans.",
      });
    });
}

// Find all who are higher overallrank than 100
export function findTop100(req, res) {
  const { page, size } = req.query;
  var condition = { "Rank": {$lte: 100} }

  const { limit, offset } = getPagination(page, size);

  Athlete.paginate(condition, { offset, limit })
    .then((data) => {
      res.send({
        totalItems: data.totalDocs,
        ironmans: data.docs,
        totalPages: data.totalPages,
        currentPage: data.page - 1,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ironmans.",
      });
    });
}

// Find all teens
export function findTop10(req, res) {
  const { page, size } = req.query;
  var condition = { $and: [ { "Rank": { $gte: 1 } }, { "Rank": { $lte: 10} } ] }

  const { limit, offset } = getPagination(page, size);

  Athlete.paginate(condition, { offset, limit })
    .then((data) => {
      res.send({
        totalItems: data.totalDocs,
        ironmans: data.docs,
        totalPages: data.totalPages,
        currentPage: data.page - 1,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ironmans.",
      });
    });
}

// Update a Athlete by the id in the request
export function update(req, res) {
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
}

// Delete a Athlete with the specified id in the request
export function deleteOne(req, res) {
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
export function deleteAll(req, res) {
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
}

// Find all published ironmans
export function findAllPublished(req, res) {

}