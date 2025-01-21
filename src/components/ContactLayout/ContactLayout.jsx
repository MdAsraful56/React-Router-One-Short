import { Outlet } from "react-router";
import Contact from "../Contact/Contact";


const ContactLayout = () => {
    return (
        <div>
            <Contact />
            <Outlet />
        </div>
    );
};

export default ContactLayout;