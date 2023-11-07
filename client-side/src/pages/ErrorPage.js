import { useRouteError, useNavigate } from "react-router-dom";

function ErrorPage () {
    const error = useRouteError();
    const navigate = useNavigate();
    console.error(error)
    
    function handleReturnHomeClick(){
        navigate("/")
    }

    return (
        <main>
            <h2>That URL does not currently exist. Click below to return to the Home page.</h2>
            <button onClick={handleReturnHomeClick}>Return Home</button>
        </main>
    )
}

export default ErrorPage;