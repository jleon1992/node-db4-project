
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    { name: "Baked Ziti" }, 
    { name: "Pizza" }, 
    { name: "Salad" }, 
    { name: "Fried Chicken" },
    { name: "Shrimp Scampi" }
  ]);
};
