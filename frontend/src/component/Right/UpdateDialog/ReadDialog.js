import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, LinearProgress } from '@mui/material';
import dayjs from 'dayjs';

const ReadOnlyEntryDialog = ({ open, onClose, entry }) => {
  const calculateProgress = () => {
    const now = dayjs();
    const endDate = dayjs(entry.targetDate);
    const startDate = dayjs(entry.createdAt || entry.startDate || now);

    const totalDuration = endDate.diff(startDate, 'day');
    const elapsedDuration = now.diff(startDate, 'day');

    return (elapsedDuration / totalDuration) * 100;
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Task Details</DialogTitle>
      <DialogContent>
        <h3>Title: {entry.title}</h3>
        <p>Description: {entry.description}</p>
        <p>Target Date: {dayjs(entry.targetDate).format('DD/MM/YYYY')}</p>
        <div>
          <p>Time Left:</p>
          <LinearProgress variant="determinate" value={calculateProgress()} />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReadOnlyEntryDialog;
