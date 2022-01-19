import axios from 'axios';
//Похоже что данная библиотека нужна только для работы с ссылками

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers:{}
});
//axios.create - создаёт базовую/целевую URL


const getUsers = () => {return axiosInstance.get('/users');};
//.get('/users') - указывает какой метод используется + добавочный URL.
const getUser = (id) => {return axiosInstance.get('/users/' + id);};

export {getUsers, getUser}