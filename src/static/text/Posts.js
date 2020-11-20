import * as postsData from './posts.json'

export const getPostByID = (id) => {
    return postsData.posts[id]
}

export const getAllPosts = () => {
    return postsData.posts
}