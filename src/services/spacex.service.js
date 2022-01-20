import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://api.spacexdata.com/v3',
});

const getLaunches = () => axiosInstance.get('/launches');

export {getLaunches}