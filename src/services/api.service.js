import {json} from "../configs/urls";


const getUsers = () => {
    return fetch(json.users)
        .then(value => value.json())
};

const getUser = (id) => {
    return fetch(json.users + '/' + id)
        .then(value => value.json())
};

const getPosts = () => {
    return fetch(json.posts)
        .then(value => value.json())
};

const getPost = (id) => {
    return fetch(json.posts + '/' + id)
        .then(value => value.json())
};

const getComments = () => {
    return fetch(json.comments)
        .then(value => value.json())
};

const getComment = (id) => {
    return fetch(json.comments + '/' + id)
        .then(value => value.json())
};



export const service = {
    getUsers,
    getUser,
    getPosts,
    getPost,
    getComments,
    getComment,
}