import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://menu-b44fc.firebaseio.com/'
});

export default instance;