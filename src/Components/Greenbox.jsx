import React, { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

const Greenbox = () => {
    const [text, setText] = useState('');
    const changeText = (event) => {
        setText(event.target.value)
    }
    return (
        <div className='container my-5 bg-info p-3 rounded'>
            <div className='d-flex justify-content-between'>

            <h2>Greenbox Text</h2>
            <Tippy content='Enter the Text and click on the screen'>
                 <button type="button" className="btn btn-outline-light btn-sm">Help</button>
            </Tippy>
            </div>
            <div className="d-flex flex-row">

                <div className="input-group flex-nowrap my-3 w-50 p-3" >
                    <span className="input-group-text" id="addon-wrapping">Enter Text</span>
                    <input type="text" className="form-control p-3" style={{ backgroundColor: 'rgba(144, 238, 144, 1)' }} aria-label="Username" aria-describedby="addon-wrapping" onBlur={changeText} />
                </div>
                <div className="input-group flex-nowrap my-3 w-50 p-3" >
                    <input type="text" className="form-control p-3" style={{ backgroundColor: 'lightblue' }} aria-label="Username" value={text} aria-describedby="addon-wrapping" />
                </div>
            </div>
        </div>
    )
}

export default Greenbox