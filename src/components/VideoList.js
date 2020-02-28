import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
    const videoItem = videos.map(
        video => { return <VideoItem onVideoSelect={onVideoSelect} />}
    )
    return (
        <div>{videoItem}</div>
    )

}
export default VideoList;