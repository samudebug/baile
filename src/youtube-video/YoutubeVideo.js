import React from 'react';
import './YoutubeVideo.css';
import moldura from '../assets/moldura.png'
import { Image } from 'react-bootstrap';
function YoutubeVideo() {
    
    const youtubeVideo = "https://www.youtube.com/embed/VgN7shMqsIE";
    return (
        <div className="video-wrapper">
            <Image src={moldura} className="moldura"/>
            <iframe  title="video-highlight" className="video" src={youtubeVideo} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default YoutubeVideo;