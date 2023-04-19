import React, { useState } from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional 

const Boxseries = () => {
  const [boxes, setBoxes] = useState('');
  const [error, setError] = useState('');
  const generateBoxes = (event) => {
    console.log('Values', event.target.value)
    if (event.target.value > 1000){
      setBoxes('');
      setError('*Number should be less than or equal to 1000 ');
    }else{
      setError('');
      var i = 1;
      const boxes = [];
      while (i <= event.target.value) {
        boxes.push(<div className='border d-inline container-sm'>{i}</div>);
        i++;
      }
      setBoxes(boxes);
    }
  }
  return (
    <div className='container my-3 text-light bg-dark p-3 rounded' style={{height:'220px'}}>
      <div className='d-flex justify-content-between'>
        <h2>Box Series</h2>
        <Tippy content='Enter the valid number to get the required boxes'>
          <button type="button" className="btn btn-outline-light btn-sm">Help</button>
        </Tippy>
      </div>
      <div className="mb-3">
        <label for="numberinput" className="form-label">Insert Valid Number (Less than or Equal to 1k)</label>
        <input type="number" min="0" max="500" className="form-control" id="numberinput" onBlur={generateBoxes} />
        <div className='py-3 text-danger'>{error}</div>
      </div>
      <div className='border p- overflow-auto'>
        {boxes}
      </div>
    </div>
  )
}

export default Boxseries