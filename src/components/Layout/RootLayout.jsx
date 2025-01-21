import Navber from './../Navber/Navber';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            <Navber />
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
};

export default RootLayout;