import {urls} from "../configs/urls";

const getAll = () => {
    return fetch(urls.users)            //Используя сокращенные ссылки
        .then(value => value.json())
};

const getById = (id) => {               //Не используя сокращений
    return fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then(value => value.json())
};

export const userService = {    //Новый способ экспорта. Объект с ключами.
    getAll,     //Если ключ и его значение совпадают, можно не дублировать.
    getUserById: getById    //Ключ getUserById и его значение (ф-ция) getById
}