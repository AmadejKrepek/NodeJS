import { url } from "../config/db.config.js";
import mongoose from "mongoose";
import ironmanModel from "./ironman.model.js";

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = url;
db.ironman = ironmanModel(mongoose);

module.exports = db;