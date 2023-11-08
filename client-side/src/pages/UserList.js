import { useNavigate } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import '../components/socialcards.css';


function UserList({ userData }){
    const navigate = useNavigate();

    function handleProfileClick(id){
        navigate(`/profiles/${id}`)
    }

    const eachUser = userData.map((user)=> {
        const {id, firstname, lastname, location, reviews} = user;
        const eachRestaurantRating = reviews.map((review, index) => {
            const {restaurant_name} = review
            return (
                    <li key={index}>{restaurant_name}</li>
            )
        })
        return (
                <Card key={id} style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{firstname} {lastname} </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{location}</Card.Subtitle>
                        <Card.Text>
                        <strong>Reviewed Restaurants: </strong>{eachRestaurantRating}
                        </Card.Text>
                        <Card.Link href="#">
                            <button className="button" onClick={() => handleProfileClick(id)}>View Profile</button>
                        </Card.Link>
                    </Card.Body>
                </Card>
        )
    })

    return (
        <div className='cardFormat'>
            {eachUser}
        </div>
    )
}

export default UserList