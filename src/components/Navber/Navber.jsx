// import { Link } from "react-router";
import "./Navber.css"
import { NavLink } from "react-router";

const Navber = () => {
    return (
        <div className="navber">
            <h3>React Router</h3>
            <nav>
                <NavLink className="Link" to='/'>Home</NavLink>
                <NavLink className="Link" to='/users'>Users</NavLink>
                <NavLink className="Link" to='/posts'>Posts</NavLink>
                <NavLink className="Link" to='/about'>About</NavLink>
            </nav>
            <button>Get Started</button>
        </div>
    );
};

export default Navber;