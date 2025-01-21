import { useLoaderData } from "react-router";


const Usres = () => {

    const users = useLoaderData();
    console.log(users);

    return (
        <div>
            <h3>This is a All Users Page</h3>
        </div>
    );
};

export default Usres;