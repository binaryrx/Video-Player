import React from 'react';

const Video = React.forwardRef((props, ref) => {

    return (
        <video className="video" ref={ref} 
            onClick={ () => {
                (props.current.matches({ready: 'playing'}) ) ?
                    props.send('PAUSE') :
                (props.current.matches({ready: 'paused'}) ) ?
                    props.send('PLAY') :
                (props.current.matches({ready: 'ended'}) ) ?
                    props.send('PLAY') : null
            }}
            onDoubleClick={ () => {
                props.send('FULLSCREENCHANGE')
            }}   
            // controls
            onCanPlay={ () => {
                props.send('LOADED',{video: ref.current, videoParent: ref.current.offsetParent});
            }}
            onTimeUpdate={() => {
                props.send('TIMING');
            }}
            onEnded={() => {
                props.send('END');
            }}
            onError={() => {
                props.send('FAIL');
            }}
            
            >
            <source src={props.droneVideo} type="video/mp4" />
        </video>
        )
});

export default Video;