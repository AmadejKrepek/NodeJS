import recipeController from "../controllers/recipe.js";

export default (app) => {

    // recipe endpoints

    app.get("/api/v1/", (req, res) => 
        res.status(200).json({"Recipe API" : "Healhty"}))

    app.get("/api/v1/recipe", recipeController.getRecipes);

    app.post("/api/v1/recipe", recipeController.addRecipe);
}