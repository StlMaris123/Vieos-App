import React from 'react';
import './VideoItem.css'

const VideoItem = ({videos}) => {
    return(
       
        <div className="video-item item">
             <img className="ui image" src={videos.snippet.thumbnails.medium.urls} />
            <div className="content">
                <div className="header">{videos.snippet.tittle}</div>
            </div>
        </div>
    )

};

export default VideoItem;