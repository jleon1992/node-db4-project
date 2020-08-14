
exports.up = function(knex) {
//   ingredients has multiple recipes
// recipes have multiple ingredients
    return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments('id');
        tbl.string('name', 255).notNullable().unique().index();
    })
    .createTable('ingredients', tbl => {
        tbl.increments('id');
        tbl.string('name', 255).notNullable().unique().index();
    })
    .createTable('instructions', tbl => {
        tbl.increments('id')
        tbl.string('instructions', 255).notNullable().unique().index();
        tbl.integer('recipes_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
    })

    .createTable('recipes_ingredients', tbl => {
        tbl.increments('id').primary()
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete("RESTRICT") // CASCADE, RESTRICT, SET NULL, DO NOTHING, SET DEFAULT
            .onUpdate("CASCADE");
        tbl.integer('ingredients_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onDelete("RESTRICT") // CASCADE, RESTRICT, SET NULL, DO NOTHING, SET DEFAULT
            .onUpdate("CASCADE");
        tbl.text('quantity')
            .notNullable()

        // tbl.integer('instructions_id')
        //     .unsigned()
        //     .notNullable()
        //     .references('id')
        //     .inTable('instructions')
        //     .onDelete("RESTRICT") // CASCADE, RESTRICT, SET NULL, DO NOTHING, SET DEFAULT
        //     .onUpdate("CASCADE");
        // tbl.primary(['recipe_id', 'ingredients_id'])
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
