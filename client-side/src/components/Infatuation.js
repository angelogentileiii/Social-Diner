import Card from 'react-bootstrap/Card';
import { useOutletContext } from "react-router-dom";

function Infatuation () {
    const data =  useOutletContext();
    // console.log(data)

    const itemArray = data.map((item, index)=> {
        // console.log(item.infatuation)
        const eachItem = item.infatuation.map((infatuation, index)=> {
            const {name, account, link} = infatuation;
                return (
                    <Card key={index} style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{name} </Card.Title>
                            <Card.Text>{account}</Card.Text>
                            {/* <Card.Text>{description}</Card.Text> */}
                            <Card.Link href={link}>Read Article</Card.Link>
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

export default Infatuation