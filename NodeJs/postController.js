const posts = [
    { id: 1, title: "First Post", content: "This is the first post." },
    { id: 2, title: "Second Post", content: "This is the second post." }
]

const getPosts = () => posts;

export const getPostsLength = () =>{
    return posts.length;
}

export default getPosts;
