// import {useState, useEffect} from 'react';
import { Outlet } from "react-router-dom"
import SideBar from "../components/SideBar"

function Home({ loggedIn, setLoggedIn, email }) {
    
    return (
        <div>
            <SideBar
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            email={email}
            />
            <Outlet />
        </div>
    )
}

export default Home