import React from 'react';
import video from './video.mp4';

const VideoCard = () => {
    return (
        <div className='container relative' >
            <h1>
                Our Team
            </h1>
            <hr />
            <video src={video} class="img-fluid" autoPlay loop mute ></video>

        </div>
    );
};

export default VideoCard;