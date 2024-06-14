
import React, {useState, useEffect} from 'react';
import './R.css';
import Lebel from "./Lebel"
import AddButton from './Bottom/Bottom';
import axios from "axios"
const Right = () => {

  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL_PORT}/api/getnotes`);
        setEntries(response.data);
        console.log(response)
      } catch (error) {
        console.error('Error fetching entries:', error);
      }
    };

    fetchEntries();
  }, []);
  return (
 <>
  <div class="R_Body">

  <div class="top">
 <div className='top-2'>

  <AddButton/>
  </div> 
        
    </div>
    <div class="content">
   <Lebel data={entries}/>


    </div>
    
   
</div>
 </>
  );
};

export default Right;

