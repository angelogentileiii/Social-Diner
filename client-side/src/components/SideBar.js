import { Link } from "react-router-dom";

function SideBar (){
    return (
        <div>
            <div className="sidebar">
                <ul className="nav">
                        <Link to="/">Home</Link>
                        <br></br>
                        <Link to="/profiles">Profiles</Link>
                        <br></br>
                        <Link to="/addreview">Review a Dish</Link>
                        <br></br>
                        <Link to="/favorites">My Favorites</Link>
                        <br></br>
                        <Link to="/login">Login</Link>
                </ul>
            </div>
        </div>
    )
}

export default SideBar