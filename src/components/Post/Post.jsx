import PropTypes from "prop-types";
import "./Post.css"
import { useNavigate } from 'react-router';

const Post = ({ post }) => {
    const { body, title, id } = post;
    const navigate = useNavigate();
    return (
        <div className="post-div">
            <h6>Id: {id} </h6>
            <h4>Title: {title} </h4>
            <p>{body}</p>
            <button onClick={()=>navigate(id.toString())} style={{padding: '5px 10px'}}>Details</button>
        </div>
    );
};

export default Post;

Post.propTypes = {
    post: PropTypes.object
}