
import React, {useState} from 'react';
import './B.css';
import Left from '../Left/Left';
import Right from '../Right/Right';
import Lebel from '../Right/Lebel';

function Body() {

  const [divs, setDivs] = useState([]);

  const handleAddDiv = () => {
    setDivs([...divs, { id: divs.length + 1 }]);
  };
  return (
    <div className="Body">
      <div className="left-container">
        <Left />
      </div>
      <div className="right-container">
        <Right />
        {/* <Right handleAddDiv={handleAddDiv} />
      <Lebel divs={divs} handleAddDiv={handleAddDiv} /> */}
      </div>
    </div>
  );
}

export default Body;
