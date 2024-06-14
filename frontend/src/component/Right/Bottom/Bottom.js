import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import InputForm from  "./Inputform"

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import "./Bo.css"


export default function FloatingActionButtons() {

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState([]);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleSaveForm = (data) => {
    setFormData([...formData, data]);
    setIsFormOpen(false);
  };


  return (

    <>
 <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Fab size="small" color="primary" aria-label="add" onClick={handleOpenForm}>
        <AddIcon />
      </Fab>
      <h2 className='tempo' style={{ marginLeft:'500px'}}>Entries List</h2>
    </Box>
      <Dialog open={isFormOpen} maxWidth="md" fullWidth="true" onClose={handleCloseForm}>

        <DialogTitle>Enter Details</DialogTitle>
        <DialogContent>
          <InputForm  type="text"onSave={handleSaveForm} onClose={handleCloseForm}  />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
   
    </>
  
  );
}