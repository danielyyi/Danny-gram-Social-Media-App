import axios from 'axios';

//if you want to deploy this yourself in your own broswer, id recommend changing this to = 'http://localhost:5000/posts' and running the program locally
const url = 'https://danielsocialapp.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url); 
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
