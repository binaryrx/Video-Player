import React, { Component } from 'react';
import maximizeImg from '../../assets/images/maximize.svg';
import minimizeImg from '../../assets/images/minimize.svg';

const MaximizeMinimize = ({current, send}) => {
    // console.log(current.context)

    if (current.context.fullscreen === false )  { 

        return (
            <button className="video-minimize" onClick={ () =>send('FULLSCREENCHANGE')} >
                <img src={maximizeImg} alt="Maximize"/>
            </button>
        )
    }else if(current.context.fullscreen === true){
        return (
            <button className="video-maximize" onClick={ () =>send('FULLSCREENCHANGE')} >
                <img src={minimizeImg} alt="Minimize"/>
            </button>
        )
    }
    
}

export default MaximizeMinimize;
