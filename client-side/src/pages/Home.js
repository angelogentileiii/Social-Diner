import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

import '../components/home.css';

function Home({ loggedIn, setLoggedIn, email }) {
    
    return (
        <>
            <div className="mainContainer">
                <SideBar
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                email={email}
                />
                <Outlet />
            </div>
        </>
    )
}

export default Home