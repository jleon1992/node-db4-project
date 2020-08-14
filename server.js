const express = require('express');

const Recipes = require('./recipe-model')
const db = require('./data/db-config.js');

const server = express();

server.use(express.json());

server.get('/api/recipes', (req, res) => {
  // get all species from the database
  Recipes.getRecipes()
  .then(recipes => {
    res.status(200).json(recipes);
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

server.get('/api/recipes/:id/shoppinglist', (req, res) => {
  // get all animals from the database
  // include species name
  const id = req.params.id

  Recipes.getShoppingList(id)
    .then(ingredients => {
      res.status(200).json(ingredients)
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// create animal
server.get('/api/recipes/:id/instructions', (req, res) => {
  const id = req.params.id
  Recipes.getInstructions(id)
    .then(instructions => {
      res.status(200).json(instructions)
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
