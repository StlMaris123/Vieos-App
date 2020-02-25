import axios from 'axios';
const KEY = 'AIzaSyC4omvspccw9HDX2_AIQjLN3hou3yUVDok'
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: `${KEY}`
    }
}

)