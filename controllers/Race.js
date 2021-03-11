import { MongoClient } from "mongodb";
import csv from "csvtojson/v2";
import fs from "fs";

export default class Race {
    constructor(countFiles, json) {
        this.countFiles = countFiles;
        this.json = json;
    }
    static Insert() {
        const uri =
            "mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb";

        const client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        async function run() {
            try {
                let count = 0;

                await client.connect();

                const database = client.db("ozr");
                const movies = database.collection("ironman");

                // create an array of documents to insert
                //--------------------------------------------------------------------------------------------------------------------------
               
                var files = fs.readdirSync("C:/Users/krepe/OneDrive - Univerza v Mariboru/FERI/2020_21/Vaje/2.semester2021/Orodja za razvoj aplikacij/1.naloga/data/Race-Results/Race-Results/IRONMAN/CSV/");
                var baseUrl = "C:/Users/krepe/OneDrive - Univerza v Mariboru/FERI/2020_21/Vaje/2.semester2021/Orodja za razvoj aplikacij/1.naloga/data/Race-Results/Race-Results/IRONMAN/CSV/";
                var start = Date.now();
                for (let j = 0; j < files.length; j++) {
                    // async / await
                    const jsonArray = await csv().fromFile(baseUrl + files[j]);

                    if (jsonArray.length !== 0) {
                        const docs = jsonArray;

                        // this option prevents additional documents from being inserted if one fails
                        const options = { ordered: true };
        
                        const result = await movies.insertMany(docs, options);
                        count += result.insertedCount;
                    }
                }
                Race.countFiles = files.length;
                console.log("================IRONMAN===================")
                console.log(`Documents inserted: ${count}`);
                console.log(`All files: ${Race.countFiles}`);
                var end = Date.now();
                console.log(`Execution time: ${(end - start) / 1000} s`);
                //--------------------------------------------------------------------------------------------------------------------------

            } finally {
                await client.close();
            }
        }
        run().catch(console.dir);
    }
    static Insert1() {
        const uri =
            "mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb";

        const client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        
        async function run() {
            try {
                let count = 0;

                await client.connect();

                const database = client.db("ozr");
                const movies = database.collection("ironman70");

                // create an array of documents to insert
                //--------------------------------------------------------------------------------------------------------------------------
               
    
                var files = fs.readdirSync("C:/Users/krepe/OneDrive - Univerza v Mariboru/FERI/2020_21/Vaje/2.semester2021/Orodja za razvoj aplikacij/1.naloga/data/Race-Results/Race-Results/IRONMAN70.3/CSV/");
                var baseUrl = "C:/Users/krepe/OneDrive - Univerza v Mariboru/FERI/2020_21/Vaje/2.semester2021/Orodja za razvoj aplikacij/1.naloga/data/Race-Results/Race-Results/IRONMAN70.3/CSV/";
                var start = Date.now();
                for (let j = 0; j < files.length; j++) {
                    // async / await
                    const jsonArray = await csv().fromFile(baseUrl + files[j]);

                    if (jsonArray.length !== 0) {
                        const docs = jsonArray;

                        // this option prevents additional documents from being inserted if one fails
                        const options = { ordered: true };
        
                        const result = await movies.insertMany(docs, options);
                        count += result.insertedCount;
                    }

                }
                Race.countFiles = files.length;
                console.log("================IRONMAN70.3===================")
                console.log(`Documents inserted: ${count}`);
                console.log(`All files: ${Race.countFiles}`);
                var end = Date.now();
                console.log(`Execution time: ${(end - start) / 1000} s`);
                //--------------------------------------------------------------------------------------------------------------------------

            } finally {
                await client.close();
            }
        }
        run().catch(console.dir);
    }
    static Insert2() {
        const uri =
            "mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb";

        const client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        async function run() {
            try {
                let count = 0;
                var files = null;
                var baseUrl = null;

                await client.connect();

                const database = client.db("ozr");
                const movies = database.collection("ultra");

                // create an array of documents to insert
                //--------------------------------------------------------------------------------------------------------------------------
               
                var files = fs.readdirSync("C:/Users/krepe/OneDrive - Univerza v Mariboru/FERI/2020_21/Vaje/2.semester2021/Orodja za razvoj aplikacij/1.naloga/data/Race-Results/Race-Results/Ultra-triathlon/CSV/");
                var baseUrl = "C:/Users/krepe/OneDrive - Univerza v Mariboru/FERI/2020_21/Vaje/2.semester2021/Orodja za razvoj aplikacij/1.naloga/data/Race-Results/Race-Results/Ultra-triathlon/CSV/";
                var start = Date.now();
                for (let j = 0; j < files.length; j++) {
                    // async / await
                    const jsonArray = await csv().fromFile(baseUrl + files[j]);

                    if (jsonArray.length !== 0) {
                        const docs = jsonArray;

                        // this option prevents additional documents from being inserted if one fails
                        const options = { ordered: true };
        
                        const result = await movies.insertMany(docs, options);
                        count += result.insertedCount;
                    }
                }
                Race.countFiles = files.length;
                console.log("================ULTRA-TRIATHLON===================")
                console.log(`Documents inserted: ${count}`);
                console.log(`All files: ${Race.countFiles}`);
                var end = Date.now();
                console.log(`Execution time: ${(end - start) / 1000} s`);
                //--------------------------------------------------------------------------------------------------------------------------

            } finally {
                await client.close();
            }
        }
        run().catch(console.dir);
    }
}
