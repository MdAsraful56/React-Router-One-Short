import { Outlet, useLoaderData } from "react-router";
import Post from "../Post/Post";
import "./Posts.css"


const Posts = () => {

    const postsData = useLoaderData();

    return (
        <div>
            <h3>All Posts </h3>
            <Outlet />
            <div className="posts-div">
                {
                    postsData.map((post)=> <Post key={post.id} post={post} ></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;

export const postsLoader = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
        throw Error('Could not found this page post')
    }
    return res.json();
}