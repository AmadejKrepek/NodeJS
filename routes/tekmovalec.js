import TekmovalecController from "../controllers/tekmovalec.js";

export default (app) => {

    // recipe endpoints

    app.get("/api/v1/", (req, res) => 
        res.status(200).json({"Recipe API" : "Healhty"}))

    app.get("/api/v1/tekmovalec", TekmovalecController.getTekmovalec);

    //app.post("/api/v1/recipe", recipeController.addRecipe);
}