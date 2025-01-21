import { Outlet } from "react-router";
import Navber from "../Navber/Navber";


const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <h1>Hello This is a Home Tab</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;