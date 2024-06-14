
import React, { useState } from 'react';
import "./Bo.css"

import axios from "axios"
const InputForm = ({ onSave, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [targetDate, setTargetDate] = useState('');

  const handleSave = async () => {
 

    const formData = {
      title,
      description,
      targetDate
    };

    try {
      const response = await axios.post('http://localhost:5000/api/notes', formData);
      console.log('Data saved:', response.data);
      
      setTitle('');
      setDescription('');
      setTargetDate('');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <div className="input-form">
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Target Date</label>
        <input
          type="date"
          value={targetDate}
          onChange={(e) => setTargetDate(e.target.value)}
        />
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default InputForm;
