import { useNavigate, useRouteError } from "react-router";


const Error = () => {

    const error = useRouteError();
    const navigate = useNavigate()

    return (
        <div>
            <h4>An error occurred.</h4>
            <p>{error.message}</p>
            <button onClick={()=> navigate('/')}>Co to HomePage</button>
        </div>
    );
};

export default Error;