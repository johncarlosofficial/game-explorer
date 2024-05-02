import axios from 'axios';

const baseURL = 'https://api.rawg.io/api';
const apiKey = process.env.REACT_APP_RAWG_API_KEY;

export default axios.create({
    baseURL,
    params: {
        key: apiKey
    }
});
