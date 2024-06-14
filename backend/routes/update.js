const express = require('express');
const router = express.Router();
const Entry = require('../model/lebel'); 


router.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, targetDate } = req.body;

  try {
    const updatedEntry = await Entry.findByIdAndUpdate(id, {
      title,
      description,
      targetDate
    }, { new: true });

    if (!updatedEntry) {
      return res.status(404).json({ error: 'Entry not found' });
    }

    res.json({ message: 'Entry updated successfully', updatedEntry });
  } catch (error) {
    console.error('Error updating entry:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
