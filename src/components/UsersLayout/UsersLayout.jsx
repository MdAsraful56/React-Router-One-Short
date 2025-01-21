import { Outlet } from "react-router";


const UsersLayout = () => {
    return (
        <div>
            <h3>All UsersLayout component</h3>
            <Outlet />
        </div>
    );
};

export default UsersLayout;