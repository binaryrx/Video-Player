import React from 'react';
import VideoPlayer from './video-player';
import './scss/main.scss';


const Title = () => {
    return (
        <h2 className="title">Video Player</h2>
    );
}
const App = () => {

    return (
        <>
            <Title />
            <VideoPlayer/>
        </>
    );
}
export default App;