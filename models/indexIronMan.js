import { url } from "../config/db.config.js";
import mongoose from "mongoose";
import ironmanModel from "./ironman.model.js";
import mongoosePaginate from "mongoose-paginate-v2";

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = url;
db.ironman = ironmanModel(mongoose, mongoosePaginate);

module.exports = db;