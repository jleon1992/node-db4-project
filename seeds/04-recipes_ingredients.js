
exports.seed = function(knex, Promise) {
  return knex('recipes_ingredients').insert([
    { recipe_id: 1, ingredients_id:1, quantity: '1box'  },
    { recipe_id: 1, ingredients_id:2, quantity:  'half a can'},
    { recipe_id: 2, ingredients_id:2, quantity: 'half a can' },
    { recipe_id: 2, ingredients_id:7, quantity: 'a pound' },
    { recipe_id: 3, ingredients_id:5, quantity: '1 head' },
    { recipe_id: 3, ingredients_id:6, quantity: '3' },
    { recipe_id: 4, ingredients_id:3, quantity: '10 legs and wings' },
    { recipe_id: 5, ingredients_id:1, quantity: '1 box' },
    { recipe_id: 5, ingredients_id:4, quantity: '2 pounds' }


  ]);
};
