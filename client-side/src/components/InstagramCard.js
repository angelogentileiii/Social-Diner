import Card from 'react-bootstrap/Card';
import { useOutletContext } from 'react-router-dom';

function InstagramCard () {
    const data = useOutletContext();
    // console.log(data)

    const itemArray = data.map((item, index)=> {
        const eachItem = item.instagram.map((instagram, index)=> {
            const {name, account, link, followers, description} = instagram;
                return (
                    <Card key={index} style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{name} </Card.Title>
                            <Card.Text>{followers}</Card.Text>
                            <Card.Text>{description}</Card.Text>
                            <Card.Link href={link}>{account}</Card.Link>
                        </Card.Body>
                    </Card>
                )
            })
        return (
            <div key={index}>
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