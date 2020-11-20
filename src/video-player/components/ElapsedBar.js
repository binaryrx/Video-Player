import React, {useRef} from 'react';
import { precentage } from "../utils";

const ElapsedBar = ({ elapsed, duration}) => {
    const ref = React.useRef(null);
    // progressBar.addEventListener('click', (event) => {
    //     const pos = (event.pageX  - (progressBar.offsetLeft + progressBar.offsetParent.offsetLeft)) / progressBar.offsetWidth;
    //     video.currentTime = pos * video.duration;
    //   });
    return(
        <div className="video-elapsed" ref={ref} onClick={ (event) => {
            const bar = event.target
        }}>
            <div className="video-elapsed-bar" style={ {width: `${precentage(duration, elapsed)}%`}}></div>
        </div>
    )
};

export default ElapsedBar;