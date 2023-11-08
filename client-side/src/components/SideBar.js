import { Link, useNavigate } from "react-router-dom";

function SideBar ({ loggedIn, setLoggedIn, email }){

    const navigate = useNavigate();

    const onButtonClick = () => {
        if (loggedIn) {
            localStorage.removeItem("user")
            setLoggedIn(false)
        } else {
            navigate("/login")
        }
    }

    if (loggedIn) {
        return (
            <div>
            <div className="sidebar">
                <ul className="nav">
                        <Link to="/" className="w3-bar-item w3-button">Home </Link>
                        <Link to="/profiles" className="w3-bar-item w3-button">Profiles</Link>
                        <Link to="/addprofile" className="w3-bar-item w3-button">Create New Profile</Link>
                        <Link to="/" className="w3-bar-item w3-button" onClick={onButtonClick}>Logout</Link>
                </ul>
                <p>
                {email}
                </p>
            </div>
        </div>
        )
    } else {
        return (
        <div>
            <div className="sidebar">
                <ul className="nav">
                        <Link to="/" className="w3-bar-item w3-button">Home</Link>
                        <br></br>
                        <Link to="/login" className="w3-bar-item w3-button">Login</Link>
                </ul>
            </div>
        </div>
        )
    }
}

export default SideBar