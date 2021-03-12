const router = require('express').Router()
const notes = require('../db/db.json')

router.get('/notes', (req, res) => {
  res.send(notes)
})

router.post('/notes', (req, res) => {
  let newNote = {
    title: req.body.title,
    text: req.body.text,
    id: notes.length + 1
  }

  notes.push(newNote)

  res.sendStatus(200)
})

router.delete('/notes/:id', (req, res) => {
  notes.splice(req.params.id - 1, 1)

  for(let i = req.params.id - 1; i < notes.length; i++) {
    notes[i].id = i + 1;
  }

  res.sendStatus(200)
})

module.exports = router