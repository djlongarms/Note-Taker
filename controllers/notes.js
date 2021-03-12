const router = require('express').Router()
const notes = require('../db/db.json')

router.get('/notes', (req, res) => {
  res.send({
    status: 200,
    message: 'GET Request successful',
    data: notes
  })
})

router.post('/notes', (req, res) => {
  let newNote = {
    title: req.body.title,
    text: req.body.text
  }

  notes.push(newNote)

  res.sendStatus(200)
})

router.delete('/notes/:id', (req, res) => {
  notes.splice(req.params.id, 1)

  res.sendStatus(200)
})

module.exports = router