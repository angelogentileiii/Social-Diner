import Card from 'react-bootstrap/Card';

function InstagramCard({ instagram }) {
    const {name, account, link, followers, description} = instagram;
    return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{name} </Card.Title>
                    <Card.Text>{followers}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                    <Card.Link href={link}>{account}</Card.Link>
                </Card.Body>
            </Card>
    )
}

export default InstagramCard