import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Landing from "../components/Landing";

function Home({ loggedIn, setLoggedIn, email }) {
    
    return (
        <>
            <div>
                <SideBar
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                email={email}
                />
                <Outlet />
            </div>
            {/* <div>
                <Landing />
            </div> */}
        </>
    )
}

export default Home