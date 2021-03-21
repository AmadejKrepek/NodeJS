import Race from "../controllers/Race.js";

export default function Read() {
    const client = Race.MongoSetup();
    async function run() {
        await client.connect();

        const database = client.db("ozr");
        const movies = database.collection("ironman");

        const findResult = await movies.find({
            name: "Hanspeter Abegg",
          });
        
        findResult.forEach(console.dir);        
        return findResult;
    }
    run().catch(console.dir);
}