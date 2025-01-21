// import { Link } from "react-router";
import "./Navber.css"
import { NavLink, useNavigate } from "react-router";

const Navber = () => {

    const navigate = useNavigate()

    return (
        <div className="navber">
            <h3>React Router</h3>
            <nav>
                <NavLink className="Link" to='/'>Home</NavLink>
                <NavLink className="Link" to='/users'>Users</NavLink>
                <NavLink className="Link" to='/posts'>Posts</NavLink>
                <NavLink className="Link" to='/about'>About</NavLink>
                <NavLink className="Link" to='/contact'>Contact</NavLink>
            </nav>
            <button onClick={()=>{navigate('/about') }} >Get Started</button>
        </div>
    );
};

export default Navber;