import Card from 'react-bootstrap/Card';
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react'

function InstagramCard () {
    const {data, handleHeaderClick} = useOutletContext();

    const [isHovered, setIsHovered] = useState(-1);

    const itemArray = data.map((item, index)=> {
        const eachItem = item.instagram.map((instagram, innerIndex)=> {
            const {name, link, followers, description, account} = instagram;
                return (
                    <Card key={index} style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Header>
                                <strong>
                                    {name}
                                </strong>
                            </Card.Header>
                            <br></br>
                            <Card.Text
                            onClick={() => handleHeaderClick(link)}
                            style={{
                                color: isHovered === innerIndex ? 'maroon' : 'initial'
                            }}
                            onMouseEnter={() => setIsHovered(innerIndex)}
                            onMouseLeave={() => setIsHovered(-1)}
                            >
                            {account}
                            </Card.Text>
                            <Card.Text>{followers}</Card.Text>
                            <Card.Text>{description}</Card.Text>
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

export default InstagramCard