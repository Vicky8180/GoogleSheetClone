
const express = require('express');
const router = express.Router();
const Entry = require('../model/lebel');

router.post('/notes', async (req, res) => {
  const { title, description, targetDate } = req.body;
  console.log(req.body)
  try {
    const newEntry = new Entry({
      title,
      description,
      targetDate
    });

    const entry = await newEntry.save();
    res.json(entry);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
