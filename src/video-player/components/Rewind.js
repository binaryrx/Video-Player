import React from 'react';
import rewindImg from '../../assets/images/rewind.svg';

const Rewind = ({current, send}) => {
    return(
        <button className="video-rewind" onClick={() => send('REWIND')} >
            <img src={rewindImg} alt="rewind"/>
        </button>
    )
};

export default Rewind;