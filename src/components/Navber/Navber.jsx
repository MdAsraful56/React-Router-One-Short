// import { Link } from "react-router";
import "./Navber.css"
import { NavLink } from "react-router";

const Navber = () => {
    return (
        <div>
            <nav>
                <NavLink className="Link" to='/'>Home</NavLink>
                <NavLink className="Link" to='users'>Users</NavLink>
                <NavLink className="Link" to='posts'>Posts</NavLink>
                <NavLink className="Link" to='about'>About</NavLink>
            </nav>
        </div>
    );
};

export default Navber;