import Card from 'react-bootstrap/Card';
import { useOutletContext } from "react-router-dom";
import { useState } from 'react';

function Timeout(){
    const {data, handleHeaderClick} = useOutletContext();

    const [isHovered, setIsHovered] = useState(-1);

    const itemArray = data.map((item, index)=> {
        const eachItem = item.timeout.map((infatuation, innerIndex)=> {
            const {name, account, link, image, image_credit} = infatuation;
                return (
                    <Card key={index} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={image} alt={image_credit} />
                        <Card.Body>
                            <Card.Header 
                            onClick={() => handleHeaderClick(link)}
                            style={{
                                color: isHovered === innerIndex ? 'maroon' : 'initial'
                            }}
                            onMouseEnter={() => setIsHovered(innerIndex)}
                            onMouseLeave={() => setIsHovered(-1)}
                            >
                                <strong>
                                    {name}
                                </strong>
                            </Card.Header>
                            <Card.Text> By {account}</Card.Text>
                        </Card.Body>
                    </Card>
                )
            })
        return (
            <div key={index} className="cardContainer">
                {eachItem}
            </div>
        )
    })
    
    return (
        <>
            {itemArray}
        </>
    )

}

export default Timeout;