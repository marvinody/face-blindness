const router = require('express').Router()
const { Person } = require('../db')
const Sequelize = require('sequelize');

// connect your API routes here!
router.get('/people', async (req, res, next) => {
  const people = await Person.findAll();
  res.json(people);
})
router.get('/people/random/', async (req, res, next) => {
  const limit = req.query.limit || 10;
  const randPeople = await Person.findAll({
    order: [
      [Sequelize.literal('RANDOM()')]
    ],
    limit
  })
  res.json(randPeople);
})


module.exports = router
