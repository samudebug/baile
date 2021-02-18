import React from 'react';
import './YoutubeVideo.css'
function YoutubeVideo() {
    const youtubeVideo = "https://www.youtube.com/embed/E1wBUL_6KnE";
    return (
        <div className="video">
            <iframe  title="video-highlight" width="560" height="315" src={youtubeVideo} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default YoutubeVideo;