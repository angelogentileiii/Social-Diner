import { useEffect, useState } from 'react';
import InstagramCard from './InstagramCard';

function Landing(){
    const [data, setData] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:3000/articles`)
            .then(response => response.json())
            .then(returnedData => {
                setData(returnedData)
            })
    }, [])

    const itemArray = data.map((item, index)=> {
        const eachInstaCard = item.instagram.map((instagram, index)=> {
            return (
               <InstagramCard key={index} instagram={instagram} />
            )
        })
        return (
            <div key={index}>
                {eachInstaCard}
            </div>
        )
    })

    return (
        <ul>
            {itemArray}
        </ul>
    )
}

export default Landing