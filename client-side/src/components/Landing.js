import { useEffect, useState } from 'react';
import NewsNav from './NewsNav';
import { Outlet } from 'react-router-dom';
import './socialcards.css';

function Landing(){
    const [data, setData] = useState([])

    function handleHeaderClick(link){
       window.open(link)
    }

    useEffect(()=> {
        fetch(`http://localhost:3000/articles`)
            .then(response => response.json())
            .then(returnedData => {
                setData(returnedData)
            })
    }, [])

    return (
        <>
            <NewsNav />
            <Outlet context={{data:data, handleHeaderClick:handleHeaderClick}}/>
        </>
    )
}

export default Landing