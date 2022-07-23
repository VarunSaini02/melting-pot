const router = require("express").Router();
const { getRecipes, createRecipe, updateRecipe, deleteRecipe } = require("./controllers/recipe");

router.get("/", (req, res) => {
    res.send("The Melting Pot backend is live!");
});

router.get("/recipes", getRecipes);
router.post("/recipes", createRecipe);
router.put("/recipes/:recipeID", updateRecipe);
router.delete("/recipes/:recipeID", deleteRecipe);

module.exports = router;