import db from "../models/index.js";
import MongoClient from "mongodb";

const OZR = db.ironman

// Create and save a new tutorial
exports.create = (req, res) => {

};

// Retrieve all Tutorials from the database
exports.findAll = (req, res) => {
    const name = req.query.name;
    let condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

    OZR.find(condition)
      .then(data => {
          console.log(data)
          res.send(data);
      })
      .catch((err) => {
          res.status(500).send({
              message:
              err.message || "Some error occured while retrieving ozr collection data."
          });
      });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {

};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all tutorials from the database
exports.deleteAll = (req, res) => {

};

// Find all published tutorials
exports.findAllPublished = (req, res) => {

};