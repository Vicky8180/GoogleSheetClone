const express = require('express');
const router = express.Router();
const Entry = require('../model/lebel'); 

// DELETE an entry by _id
router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id)

  try {
    const deletedEntry = await Entry.findByIdAndDelete(id);

    if (!deletedEntry) {
      return res.status(404).json({ error: 'Entry not found' });
    }

    res.json({ message: 'Entry deleted successfully', deletedEntry });
  } catch (error) {
    console.error('Error deleting entry:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
