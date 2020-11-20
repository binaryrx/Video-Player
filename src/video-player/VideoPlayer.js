import React, { useState, useRef } from 'react';
import { useMachine } from '@xstate/react';
import droneVideo from '../assets/videos/drone.mp4';

import videoMachine from './stateMachine/videoStateMachine';
import { setVideo, setElapsed, playVideo, pauseVideo, restartVideo, minMaxVideo,rewindVideo, fastForwardVideo } from './stateMachine/videoStateMachineActions';
import { Video, ElapsedBar, PlayUnpauseReplay, Timer, MinimizeMaximize,Rewind,FastForward, } from './components'


const VideoPlayer = () => {
    const ref = React.useRef(null);
    const [current, send] = useMachine(videoMachine, {
        actions: { setVideo, setElapsed, playVideo, pauseVideo, restartVideo, minMaxVideo, rewindVideo, fastForwardVideo }
    });
    const { duration, elapsed } = current.context;

    return(
        <div className="video-player-container">
            {current.matches('loading') && (<div className="loading">Loading...</div>)}

            <Video ref={ref}  current={current} send={send} droneVideo={droneVideo}/>

            {['paused', 'playing', 'ended'].some( someState => 
                current.matches({ready: someState})
            ) && (
                <div className="video-controls">
                {/* <Buttons current={current} send={send}/> */}

                    <ElapsedBar elapsed={elapsed} duration={duration} />
                    <PlayUnpauseReplay current={current} send={send}/>
                    <Timer elapsed={elapsed} duration={duration}/>
                    <Rewind current={current} send={send} />
                    <FastForward current={current} send={send} />
                    <MinimizeMaximize current={current} send={send} />
                </div>
                 ) }
            
        </div>
    )
}

export default VideoPlayer;