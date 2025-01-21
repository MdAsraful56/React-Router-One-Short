import "./PostDetails.css"
import { useLoaderData } from 'react-router';


const PostDetails = () => {

    const PostDetailsData = useLoaderData();

    return (
        <div className='postDetails-div'>
            <p><b>Title: </b> {PostDetailsData.title} </p>
            <p><b>Id: </b> {PostDetailsData.id} </p>
            <p><b>Body: </b> {PostDetailsData.body} </p>
        </div>
    );
};

export default PostDetails;


export const PostDetailsLoader = async ({ params })=> {
    const { id } = params; 
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    return res.json();
}