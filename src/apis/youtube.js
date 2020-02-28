import axios from 'axios';
const KEY = 'AIzaSyB8UHeHYGTgh-fC0wR_qsJ0Ne1rz23IAzM'
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