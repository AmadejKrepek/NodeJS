// the entry file
import server from "./server.js";
import Race from "./controllers/Race";
/* Only needed for insterting data in database
Race.Insert("ironman");
Race.Insert("ironman70");
Race.Insert("ultra");
*/
Race.Read();