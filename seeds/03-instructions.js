
exports.seed = function(knex, Promise) {
  return knex('instructions').insert([
    { instructions: "boil water", recipes_id: 1 }, 
    { instructions: "add pasta", recipes_id: 1 }, 
    { instructions: "add sauce", recipes_id: 1 }, 
    { instructions: "spin dough", recipes_id: 2 }, 
    { instructions: "bake", recipes_id: 2 }, 
    { instructions: "cut vegetables", recipes_id: 3 }, 
    { instructions: "stir", recipes_id: 3 }, 
    { instructions: "fry chicken", recipes_id: 4 }, 
    { instructions: "serve", recipes_id: 4 }, 
    { instructions: "cook pasta", recipes_id: 5 }, 
    { instructions: "cook shrimp", recipes_id: 5 }, 
    { instructions: "mix and serve", recipes_id: 5 }, 


  ]);
};
