
import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import NotesIcon from '@mui/icons-material/Notes';
import axios from 'axios';
import EditEntryDialog from './UpdateDialog/Dialog';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ReadOnlyEntryDialog from './UpdateDialog/ReadDialog';

const EntriesList = (props) => {
  const getRandomColor = () => {
    const letters = '89ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/delete/${id}`);
      console.log('Entry deleted:', response.data);
    } catch (error) {
      console.error('Error deleting entry:', error);
    }
  };

  const entries = props.data;


  const [selectedEditEntry, setSelectedEditEntry] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const handleOpenEditDialog = (entry) => {
    setSelectedEditEntry(entry);
    setIsEditDialogOpen(true);
  };

  const handleCloseEditDialog = () => {
    setIsEditDialogOpen(false);
    setSelectedEditEntry(null);
  };

    const [entries2, setEntries] = useState([
    { _id: '1', title: 'Sample Title', description: 'Sample Description', targetDate: '2023-06-01' },
   
  ]);

  const handleUpdateEntry = (updatedEntry) => {
    setEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry._id === updatedEntry._id ? updatedEntry : entry
      )
    );
  };

  
  const [selectedReadEntry, setSelectedReadEntry] = useState(null);
  const [isReadDialogOpen, setIsReadDialogOpen] = useState(false);

  const handleOpenReadDialog = (entry) => {
    setSelectedReadEntry(entry);
    setIsReadDialogOpen(true);
  };

  const handleCloseReadDialog = () => {
    setIsReadDialogOpen(false);
    setSelectedReadEntry(null);
  };

  return (
    <div className="entries-list">
      {entries.length > 0 ? (
        <div className="entries-container">
          {entries.map((entry, index) => (
            <div className="entry" key={entry._id} style={{ backgroundColor: getRandomColor() }}>
              <h3>{entry.title}</h3>
              <p className="description">{entry.description}</p>
              <div className="buttons">
                <button onClick={() => handleOpenEditDialog(entry)}>
                  <EditIcon /> Edit
                </button>
                <button onClick={() => handleOpenReadDialog(entry)}>
                  <ArchiveIcon /> Read
                </button>
                <button onClick={() => handleDelete(entry._id)}>
                  <DeleteOutlineIcon /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No entries found.</p>
      )}

      {selectedEditEntry && (
        <EditEntryDialog
          open={isEditDialogOpen}
          onClose={handleCloseEditDialog}
          entry={selectedEditEntry}
          onUpdate={handleUpdateEntry}
        />
      )}

      {selectedReadEntry && (
        <ReadOnlyEntryDialog
          open={isReadDialogOpen}
          onClose={handleCloseReadDialog}
          entry={selectedReadEntry}
        />
      )}
    </div>
  );
};

export default EntriesList;

