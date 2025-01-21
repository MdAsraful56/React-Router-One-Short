import PropTypes from "prop-types";
import "./User.css"

const User = ({ user }) => {

    const { name, phone, website } = user;
    return (
        <div className="user-div">
            <h5>{name}</h5>
            <h6>{phone}</h6>
            <h6>{website}</h6>
        </div>
    );
};

export default User;


User.propTypes = {
    user: PropTypes.object
}