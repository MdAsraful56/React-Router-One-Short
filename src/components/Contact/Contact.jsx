import { useNavigate } from "react-router";
import "./Contact.css"

const Contact = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h2>Contact Page</h2>
            <div className="contact-buttons">
                <button onClick={()=>{navigate('info')}}>Contact Info</button>
                <button onClick={()=>{navigate('form')}}>Contact Form</button>
            </div>
        </div>
    );
};

export default Contact;