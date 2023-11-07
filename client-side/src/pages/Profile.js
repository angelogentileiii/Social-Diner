import {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Card from 'react-bootstrap/Card';

function Profile (){
    const [profile, setProfile] = useState({})

    const navigate = useNavigate();
    const { profileID } = useParams();
    
    function handleNewReviewClick(id){
        navigate(`/${id}/addreview`)
    }

    useEffect(() => {
        fetch(`http://localhost:3000/profiles/${profileID}`)
        .then(response => response.json())
        .then(returnedData => {
            setProfile(returnedData)
        })
    }, [profileID])

    if(!profile.firstname) {
        return <h1>Sorry looking...</h1>
    }

    const {id, firstname, lastname, reviews} = profile;
        const eachRestaurantRating = reviews.map((review, index) => {
            const {restaurant_name, ratings} = review
                const dishRatings = ratings.map((rating, index)=> {
                    const {dish_name, cuisine, dish_size, score} = rating;
                    return (

                        <Card style={{ width: '18rem' }}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Title>{dish_name}</Card.Title>
                                <Card.Text>Cuisine: {cuisine}</Card.Text>
                                <Card.Text>Dish Size: {dish_size}</Card.Text>
                                <Card.Text>Rating: {score}</Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })
            return (
                <ul key={index}>
                    <h4>{restaurant_name}</h4>
                    {dishRatings}
                </ul>
            )
        })
    
    return (
        <span className="dinerCard" key={id}>
            <h3>{firstname} {lastname}</h3>
            <button onClick={()=>handleNewReviewClick(id)}>Add A New Review</button>
            <ul>{eachRestaurantRating}</ul>
        </span>
    )

}

export default Profile