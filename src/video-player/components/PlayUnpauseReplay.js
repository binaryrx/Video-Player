import React from 'react';
import playImg from '../../assets/images/play.svg';
import pauseImg from '../../assets/images/pause.svg';
import replayImg from '../../assets/images/replay.svg';



const PlayUnpauseReplay = ({current, send}) => {
    if(current.matches( {ready: 'playing'})){
        return (
            <button className="video-pause" onClick={ () =>send('PAUSE') }>
                <img src={pauseImg} alt="pause"/>
            </button>
        )
    }else if( current.matches( {ready: 'ended'})) {     
        return (
            <button className="video-replay" onClick={ () =>send('PLAY') }>
                <img src={replayImg} alt="replay"/>
            </button>
        )
    }
    return (
        <button className="video-play" onClick={ () =>  send('PLAY') }>
            <img src={playImg} alt="play"/>
        </button>
    )

    

}
export default PlayUnpauseReplay;