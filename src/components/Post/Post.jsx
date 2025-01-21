import PropTypes from "prop-types";
import "./Post.css"

const Post = ({ post }) => {
    const { body, title, id } = post;
    return (
        <div className="post-div">
            <h6>Id: {id} </h6>
            <h4>Title: {title} </h4>
            <p>{body}</p>
        </div>
    );
};

export default Post;

Post.propTypes = {
    post: PropTypes.object
}