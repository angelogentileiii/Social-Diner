import { useEffect, useState } from 'react';
import InstagramCard from './InstagramCard';
import NewsNav from './NewsNav';
import { Outlet } from 'react-router-dom';

function Landing(){
    const [data, setData] = useState([])
   

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
            <Outlet context={data}/>
        </>
    )
}

export default Landing