const router = require('express').Router()
const { Person } = require('../db')

// connect your API routes here!
router.get('/people', async (req, res, next) => {
  const people = await Person.findAll();
  res.json(people);
})


module.exports = router
