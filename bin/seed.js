#!/usr/bin/env node

const { db, Person } = require('../server/db')
const axios = require('axios');
const seed = async () => {
  await db.sync({ force: true })

  const d = await axios('https://randomuser.me/api/?inc=gender,name,picture&results=100');

  await Promise.all(d.data.results.map(person => Person.create({
    firstName: person.name.first,
    lastName: person.name.last,
    gender: person.gender,
    image: person.picture.large,
  })))

  db.close()
  console.log(`

    Seeding successful!
    Ready to be blinded!

  `)
}

seed().catch(err => {
  db.close()
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `)
})
