import React from 'react';
import errpage from '../images/404page.png';
import './style.css';

function NotFound() {

    return (
        <div id="wrapper">
            <img src={errpage} alt="404" className='imgStyle' />
        </div >
    )
}

export default NotFound;