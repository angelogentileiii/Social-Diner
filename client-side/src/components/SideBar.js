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
                    <br></br>
                        <Link to="/" className="sidebar-link">Home </Link>
                        <Link to="/profiles" className="sidebar-link">Current Users</Link>
                        <Link to="/addprofile" className="sidebar-link">Create New Profile</Link>
                        <Link to="/" className="sidebar-link" onClick={onButtonClick}>Logout</Link>
                    <br></br>
                    <br></br>
                        <div className="email">{email}</div>
                </ul>
            </div>
        </div>
        )
    } else {
        return (
        <div>
            <div className="sidebar">
                <ul className="nav">
                        <Link to="/" className="sidebar-link">Home</Link>
                        <Link to="/login" className="sidebar-link">Login</Link>
                </ul>
            </div>
        </div>
        )
    }
}

export default SideBar