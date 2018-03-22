import response from '../../stubs/feed.json';
import Post from "../model/post";

export const getBlogPosts = () => {
    let posts = [];

    Object.values(response.payload.references.Post).forEach((post) => {
        posts.push(new Post(post));
    });

    return posts;
};
