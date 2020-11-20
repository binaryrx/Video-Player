import React from 'react';
import fastForwardImg from '../../assets/images/fast-forward.svg';

const FastForward = ({current, send}) => {
    return(
        <button className="video-fastForward" onClick={() => send('FASTFORWARD')} >
            <img src={fastForwardImg} alt="fast forward"/>
        </button>
    )
};

export default FastForward;