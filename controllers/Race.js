import { MongoClient } from "mongodb";
import csv from "csvtojson/v2";
import fs from "fs";

export default class Race {
    constructor(countFiles) {
        this.countFiles = countFiles;
    }
    static FindFiles(collectionName) {
        let array = [];
        let files = null;
        let baseUrl = null;
        if (collectionName === "ironman") {
            array.push(files = fs.readdirSync("C:/Users/krepe/OneDrive - Univerza v Mariboru/FERI/2020_21/Vaje/2.semester2021/Orodja za razvoj aplikacij/1.naloga/data/Race-Results/Race-Results/IRONMAN/CSV/"));
            array.push(baseUrl = "C:/Users/krepe/OneDrive - Univerza v Mariboru/FERI/2020_21/Vaje/2.semester2021/Orodja za razvoj aplikacij/1.naloga/data/Race-Results/Race-Results/IRONMAN/CSV/");
        }
        else if (collectionName === "ironman70") {
            array.push(files = fs.readdirSync("C:/Users/krepe/OneDrive - Univerza v Mariboru/FERI/2020_21/Vaje/2.semester2021/Orodja za razvoj aplikacij/1.naloga/data/Race-Results/Race-Results/IRONMAN70.3/CSV/"));
            array.push(baseUrl = "C:/Users/krepe/OneDrive - Univerza v Mariboru/FERI/2020_21/Vaje/2.semester2021/Orodja za razvoj aplikacij/1.naloga/data/Race-Results/Race-Results/IRONMAN70.3/CSV/");
        }
        else if (collectionName === "ultra") {
            array.push(files = fs.readdirSync("C:/Users/krepe/OneDrive - Univerza v Mariboru/FERI/2020_21/Vaje/2.semester2021/Orodja za razvoj aplikacij/1.naloga/data/Race-Results/Race-Results/Ultra-triathlon/CSV/"));
            array.push(baseUrl = "C:/Users/krepe/OneDrive - Univerza v Mariboru/FERI/2020_21/Vaje/2.semester2021/Orodja za razvoj aplikacij/1.naloga/data/Race-Results/Race-Results/Ultra-triathlon/CSV/");
        }
        else {
            console.log("No files found!");
        }
        return array;
    }
    static MongoSetup() {
        const uri =
            "mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb";

        const client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        return client;
    }
    static Insert(collectionName) {
        const client = Race.MongoSetup();
        async function run() {
            try {
                let count = 0;
                let files = Race.FindFiles(collectionName)[0];
                let baseUrl = Race.FindFiles(collectionName)[1];

                await client.connect();

                const database = client.db("ozr");
                const movies = database.collection(collectionName);

                var start = Date.now();
                for (let j = 0; j < files.length; j++) {
                    const jsonArray = await csv().fromFile(baseUrl + files[j]);

                    if (jsonArray.length !== 0) {
                        const docs = jsonArray;

                        const options = { ordered: true };
        
                        const result = await movies.insertMany(docs, options);
                        count += result.insertedCount;
                    }
                }
                Race.countFiles = files.length;
                console.log(`"================${collectionName}==================="`)
                console.log(`Documents inserted: ${count}`);
                console.log(`All files: ${Race.countFiles}`);
                var end = Date.now();
                console.log(`Execution time: ${(end - start) / 1000} s`);

            } finally {
                await client.close();
            }
        }
        run().catch(console.dir);
    }
}