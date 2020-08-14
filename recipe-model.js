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
    return db('ingredients as i')  
        .join('recipes_ingredients as ri', 'ingredients.id', 'ri_ingredients_id' )
        .select('i.name', 'ri.quantity')
        .where('ri.recipe_id', recipe_id)
}

function getInstructions(recipe_id){
    return('instructions as i')
        .select('i.instructions')
        .where('recipes_id', recipe_id)
}