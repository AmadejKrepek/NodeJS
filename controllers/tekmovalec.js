import Race from "./Race.js";
import Tekmovalec from "../data/tekmovalec.js";

export default class TekmovalecController {
    static getTekmovalec(req, res) {

        return res.status(201).json({

            count: Tekmovalec.length,

            message: "Find one tekmovalec",

            Tekmovalec: Tekmovalec

        });
    }
}