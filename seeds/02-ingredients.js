
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    { name: "Pasta" }, 
    { name: "Tomato Sauce" }, 
    { name: "Chicken" }, 
    { name: "Shrimp" },
    { name: "Lettuce" },
    { name: "Tomato" },
    { name: "Dough" }
  ]);
};
