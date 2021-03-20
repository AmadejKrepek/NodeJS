import Recipe from "../data/recipe.js";

export default class recipeController {
    
    static getRecipes(req, res) {

        return res.status(201).json({

            count: Recipe.length,

            message: "List of all Recipe",

            Recipe: Recipe

        });
    }

    // add a new recipe with unique id
    static addRecipe(req, res) {

        const newId = parseInt(Recipe.length) + 1;

        const { name, description } = req.body;

        const newRecipe = {

            id: newId,

            name, 

            description,

            addedAt: new Date()
        };

        Recipe.push(newRecipe);

        return res.status(201).json({

            message: "Anew recipe has been added",

            data: {id: newId, name: name}
        });
    }
}