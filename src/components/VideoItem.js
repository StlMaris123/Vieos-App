import React from 'react';

const VideoItem = ({videos}) => {
    return(
       
        <div>
             <img src={videos.snippet.thumbnails.medium.urls} />
            {videos.snippet.tittle}
        </div>
    )

};

export default VideoItem;