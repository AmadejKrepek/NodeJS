import {url} from "../config/db.config.js";
import modelconfig from "./tutorial.model.js";

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = url;
db.ironman = modelconfig(mongoose);

module.exports = db;