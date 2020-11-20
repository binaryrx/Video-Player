import React from 'react';
import { minutes, seconds } from "../utils";


const Timer = ({elapsed, duration}) => {
    return(
        <span className="video-timer">
            {minutes(elapsed)}:{seconds(elapsed)} of {minutes(duration)}:{seconds(duration)}
        </span>
    )
};

export default Timer;