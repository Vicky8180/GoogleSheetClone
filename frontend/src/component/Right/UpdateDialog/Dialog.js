import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';
import axios from 'axios';

const EditEntryDialog = ({ open, onClose, entry, onUpdate }) => {
  const [title, setTitle] = useState(entry.title);
  const [description, setDescription] = useState(entry.description);
  const [targetDate, setTargetDate] = useState(entry.targetDate);

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/update/${entry._id}`, {
        title,
        description,
        targetDate
      });
      console.log('Entry updated:', response.data);
      onUpdate(response.data.updatedEntry);
      onClose();
    } catch (error) {
      console.error('Error updating entry:', error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Edit Entry</DialogTitle>
      <DialogContent>
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Description"
          fullWidth
          margin="normal"
          multiline
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          label="Target Date"
          fullWidth
          margin="normal"
          type="date"
          value={targetDate}
          onChange={(e) => setTargetDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Cancel</Button>
        <Button onClick={handleUpdate} color="primary" variant="contained">Update</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditEntryDialog;
