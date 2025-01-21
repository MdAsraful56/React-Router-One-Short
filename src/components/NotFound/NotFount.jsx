import { useNavigate } from "react-router";


const NotFount = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h2>404 || Page not found</h2>
            <br /> <br />
            <button style={{
                padding: '10px 20px',
                borderRadius: '15px',
                fontSize: '16px'
            }} onClick={()=> navigate('/')}>Go to HomePage</button>
        </div>
    );
};

export default NotFount;