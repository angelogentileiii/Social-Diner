// import {useState, useEffect} from 'react';
import { Outlet } from "react-router-dom"
import SideBar from "../components/SideBar"

function Home() {
    // const [restaurantNews, setRestaurantNews] = useState([]);
    
    return (
        <div>
            <SideBar />
            <Outlet />
        </div>
    )
}

export default Home