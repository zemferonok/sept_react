import {json} from "../configs/urls";

const getUsers = () => {
    return fetch(json.users)
        .then(value => value.json())
};

const getUser = (id) => {
    return fetch(json.users + '/' + id)
        .then(value => value.json())
};

const getUserPosts = (id) => {
    return fetch(json.users + '/' + id + '/posts')
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

const getPostComments = (id) => {
    return fetch(json.posts + '/' + id + '/comments')
        .then(value => value.json())
};

export const service = {
    getUsers,
    getUser,
    getUserPosts,
    getPosts,
    getPost,
    getPostComments,
}