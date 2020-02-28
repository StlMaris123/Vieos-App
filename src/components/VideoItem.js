import React from 'react';
import './VideoItem.css'

const VideoItem = ({video, onVideoSelect}) => {
    return(
       
        <div onClick={() => onVideoSelect(video)} className="video-item item">
             <img alt={video.snippet.tittle} className="ui image" src={video.snippet.thumbnails.medium.urls} />
            <div className="content">
                <div className="header">{video.snippet.tittle}</div>
            </div>
        </div>
    )

};

export default VideoItem;