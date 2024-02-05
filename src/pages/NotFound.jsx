import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom';

const NotFound = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div className="h-screen flex flex-col justify-center items-center gap-2">
            <h1>404</h1>
            <p>Page not found - Página no encontrada</p>
            <p>{error.statusText || error.message}</p>
            <Link to="/" className=" text-gray-500 font-semibold underline">
            Volver a página principal
          </Link>
        </div>
    );
};
export default NotFound;
