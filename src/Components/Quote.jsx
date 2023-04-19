import React, { useState } from 'react';
import Axios from 'axios';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

const Quote = () => {
    const [quote, setQuote] = useState('Hi There! Get some quotes.');
    const [author, setAuthor] = useState('--');
    const getQuote = () => {
        Axios.get('https://api.quotable.io/random').then((response) => {
            console.log(response);
            setQuote(response.data.content)
            setAuthor(response.data.author)
        })
    }
    return (
        <div className='container my-5 text-bg-primary p-3 rounded'>
            <div className='d-flex justify-content-between'>
                <h2>Quote of the Day</h2>
                <Tippy content='Fetch Random Quote through API'>
                 <button type="button" className="btn btn-outline-light btn-sm" >Help</button>
                </Tippy>
            </div>
            <desc>Click on the button to get the new quote.</desc><br />
            <div className="my-3" style={{height:'100px'}}>
                <p>{quote}</p>
                <small>--{author}--</small>
            </div>
            <button type="button" className="btn bg-primary-subtle my-3" onClick={getQuote}>Get Quote</button>
        </div>
    )
}

export default Quote