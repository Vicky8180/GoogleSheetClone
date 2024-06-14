
import React, { useState } from 'react';
import './L.css';
import AddCommentIcon from '@mui/icons-material/AddComment';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import NotesIcon from '@mui/icons-material/Notes';

const ColumnButtons = () => {
  const items = ['Notes', 'Add New', 'Edit', 'Archived'];
  const icons = [
    <NotesIcon />,
    <AddCommentIcon />,
    <EditIcon />,
    <ArchiveIcon />
  ];

  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (index) => {
    setClickedIndex(index);
  };

  return (
    <div className="column-buttons">
      {items.map((item, index) => (
        <div
          key={index} 
          className={`LevelEdit ${index === clickedIndex ? 'clicked' : ''}`}
          onClick={() => handleClick(index)} 
        >
          <div className="button-icon">{icons[index]}</div>
          <span style={{ marginLeft: "15px" }} className="button-text">{item}</span>
        </div>
      ))}
    </div>
  );
};

export default ColumnButtons;
