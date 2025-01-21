import { useLoaderData } from "react-router";
import User from "../Usre/User";
import "./Users.css"


const Usres = () => {


    const usersData = useLoaderData();

    return (
        <div>
            <h4>Users Page component</h4>
            <div className="users-div">
                {
                    usersData.map((user, idx) => <User key={idx} user={user} ></User>)
                }
            </div>
        </div>
    );
};

export default Usres;

export const UsersLoader = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
}