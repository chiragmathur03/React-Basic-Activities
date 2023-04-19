import React, { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

const FIFA = () => {
    const [players, setPlayers] = useState('');
    const [winner, setWinner] = useState('');
    const firstWinner = () => {
            setPlayers("Scoreboard ~ France (1)  Belgium (0)")
            setWinner("Winner ~ France")
        console.log('Button Clicked')
        }  
        const secondWinner = () => {
            setPlayers("Scoreboard ~ Croatia (2)  England (1)")
            setWinner("Winner ~ Croatia") 
        console.log('Button Clicked')
        }
   
    return (
        <div className='container my-5 text-bg-light p-3 rounded' style={{height:'200px'}}>
             <div className='d-flex justify-content-between'>
            <h2>FIFA 2018 Semifinal Participants</h2>
            <Tippy content='List of FIFA 18 Semi-Finalist with Scoreboard and Winner Result'>
                 <button type="button" className="btn btn-outline-secondary btn-sm">Help</button>
            </Tippy>
             </div>
            <div classNameName="btn-group">
                <button type="button" className="btn btn-secondary dropdown-toggle my-3" data-bs-toggle="dropdown" aria-expanded="false">
                    List of Semi-Finalist
                </button>
                <ul className="dropdown-menu">
                    <h6 className="dropdown-header">10 July - Saint Petersburg</h6>
                    <li onClick={firstWinner}>
                        <li><a className="dropdown-item">France</a></li>
                        <li><a className="dropdown-item" value="option2">Belgium</a></li>
                    </li>
                    <li><hr className="dropdown-divider"/></li>
                    <h6 className="dropdown-header">11 July – Moscow (Luzhniki)</h6>
                    <li onClick={secondWinner}>
                        <li><a className="dropdown-item" value="option3">Croatia</a></li>
                        <li><a className="dropdown-item" value="option4">England</a></li>
                    </li>
                </ul>
            </div>
                <h5>{players}</h5>
                <h5>{winner}</h5>
        </div>
    )
}

export default FIFA