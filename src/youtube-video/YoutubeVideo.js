import React from 'react';
import './YoutubeVideo.css';
import moldura from '../assets/moldura.png'
import { Image } from 'react-bootstrap';
import ReactPlayer from 'react-player/lazy';
function YoutubeVideo() {
    
    const youtubeVideo = "https://www.youtube.com/watch?v=VgN7shMqsIE&list=PLU8MThNhi5nM_topLHAJYqtufy-IuYpJJ";
    return (
        <div className="video-wrapper">
            <Image src={moldura} className="moldura"/>
            <div className="video">
            <ReactPlayer 
            url={youtubeVideo}
            height="100%"
            width="100%"
            />
            </div>
        </div>
    )
}

export default YoutubeVideo;