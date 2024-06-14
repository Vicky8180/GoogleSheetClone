
const express = require('express');
const router = express.Router();
const Entry = require('../model/lebel');


router.get('/getnotes', async (req, res) => {
  try {
    const entries = await Entry.find();
    res.json(entries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
