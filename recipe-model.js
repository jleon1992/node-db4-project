const knex = require('knex')
const db = require('./data/db-config')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db('recipes')
}

function getShoppingList(recipe_id){
    return db('recipes_ingredients as ri')        
        .join('ingredients', 'ingredients.id', 'ri.ingredients_id')
        .select('ingredients.name', 'ri.quantity')
        .where('ri.recipe_id', recipe_id)
}

function getInstructions(recipe_id){
    return db().select('instructions').from('instructions as i')
        .where('i.recipes_id', recipe_id)
}