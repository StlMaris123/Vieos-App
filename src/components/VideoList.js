import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos}) => {
    const videoItem = videos.map(
        video => { return <VideoItem />}
    )
    return (
        <div>{videoItem}</div>
    )

}
export default VideoList;