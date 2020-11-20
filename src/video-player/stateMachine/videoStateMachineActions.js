import { assign } from 'xstate';


//Actions Functions
export const setVideo = assign({
    video: (_context, event) => event.video,
    videoParent: (_context, event) => event.videoParent,
    duration: (_context, event) => event.video.duration
});

export const setElapsed = assign({
    elapsed: (context, _event) => context.video.currentTime
});

export const playVideo = (context, _event) => {
    context.video.play();
};

export const pauseVideo = (context, _event) => {
    context.video.pause();
}

export const restartVideo = (context, _event) => {
    context.video.currentTime = 0;
    context.video.play();
}

export const minMaxVideo = assign({
    fullscreen: (context, _event) => {
        context.fullscreen ? document.exitFullscreen() : context.videoParent.requestFullscreen();
        return !context.fullscreen
    }
});

export const rewindVideo = assign({
    elapsed: (context, event) => {
        return context.video.currentTime -= context.rewindSkip;
    }
});

export const fastForwardVideo = assign({
    elapsed: (context, event) => {
        return context.video.currentTime += context.forwardSkip;
    }
});