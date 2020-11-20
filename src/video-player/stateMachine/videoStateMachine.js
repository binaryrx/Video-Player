import { Machine } from 'xstate';
//Video State Machine
const videoMachine = Machine({
    id: "video",
    initial: 'loading',

    context: {
        videoParent: null,
        video: null,
        duration: 0,
        elapsed: 0,
        fullscreen: false,
        forwardSkip: 5,
        rewindSkip: 5,
    },

    states: {
        loading: {
            on: {
                LOADED: {
                    target: 'ready',
                    actions: ['setVideo']
                },
                FAIL: 'failure'
            }
        },
        ready: {
            initial: 'paused',
            states: {
                paused: {
                    on: {
                        FULLSCREENCHANGE: {
                            actions: 'minMaxVideo'
                        },
                        REWIND: {
                            actions: ['rewindVideo','setElapsed']
                        },
                        FASTFORWARD: {
                            actions: ['fastForwardVideo','setElapsed']
                        },
                        PLAY: {
                            target: 'playing',
                            actions: ['setElapsed', 'playVideo']
                        }
                    }
                },
                playing: {
                    on: {
                        TIMING: {
                            target: 'playing',
                            actions: 'setElapsed'
                        },
                        FULLSCREENCHANGE: {
                            actions: 'minMaxVideo'
                        },
                        REWIND: {
                            actions: ['rewindVideo']
                        },
                        FASTFORWARD: {
                            actions: 'fastForwardVideo'
                        },
                        PAUSE: {
                            target: 'paused',
                            actions: ['setElapsed', 'pauseVideo']
                        },
                        END: {
                            target: 'ended'
                        }
                    }
                },
                ended: {
                    on: {
                        FULLSCREENCHANGE: {
                            actions: 'minMaxVideo'
                        },
                        PLAY: {
                            target: 'playing',
                            actions: 'restartVideo'
                        }
                    }
                }
            }
        },
        
        failure: {
            type: 'final'
        },
    }
    
})
export default videoMachine;