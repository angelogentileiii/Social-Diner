import {useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

let restaurantName;

function AddReview ({ userData }) {
    const {profileID} = useParams();
    const navigate = useNavigate();

    const [reviewData, setReviewData] = useState({
        restaurant_name: "",
        ratings: []
    });

    function handleReviewInputChange(event){
        const {name, value} = event.target;

        if (name === 'restaurant_name') {
            restaurantName = value
        }

        const newDishRating = {
            ...reviewData.ratings,
            [name] : value
        }

        setReviewData({
            ...reviewData,
            ratings: newDishRating
            })

        if( name === "dish_name" || name === 'cuisine') {
            const newDishRating = {
                ...reviewData.ratings,
                [name] : value
            }
            setReviewData({
                ...reviewData,
                ratings: newDishRating
                })
        } else if (
            name === "dish_size" ||
            name === "score") {
                const newNumberRating = {
                    ...reviewData.ratings,
                    [name] : Number(value)
                }
                setReviewData({
                    ...reviewData,
                    ratings: newNumberRating
                })
        } else {
            setReviewData({
                ...reviewData,
                [name] : value
            })
        }
    }

    function handleReviewSubmit(event) {
        event.preventDefault();
    
        userData.forEach((user) => {
            if (user.id === profileID) {
                let foundRestaurant = false;
        
                user.reviews = user.reviews.map((restaurant) => {
                if (restaurant.restaurant_name.toLowerCase() === restaurantName.toLowerCase()) {
                    foundRestaurant = true;
                    return {
                        ...restaurant,
                        ratings: [...restaurant.ratings, reviewData.ratings],
                    };
                }
                return restaurant;
                });
        
                if (!foundRestaurant) {
                    user.reviews.push({
                        restaurant_name: restaurantName,
                        ratings: [reviewData.ratings],
                    });
                }
        
                fetch(`http://localhost:3000/profiles/${user.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(user),
                })
                .then((response) => {
                    if (response.ok) {
                        return response.json().then(() => {
                            navigate(`/profiles/${user.id}`)
                        });
                    }
                });
            }
        });
    }

    return(
        <div>
            <h2>Write a Review</h2>
            <form onSubmit={handleReviewSubmit}>
                <label>Restaurant: 
                    <input
                    type='text'
                    name='restaurant_name'
                    value={reviewData.restaurant_name}
                    onChange={handleReviewInputChange}
                    />
                </label>
            <br></br>
                <label>
                    Name of Dish: 
                    <input
                    type="text"
                    name="dish_name"
                    value={reviewData.dish_name}
                    onChange={handleReviewInputChange}
                    />
                </label>
            <br></br>
                <label>
                    Cuisine Type:
                    <input
                    type="text"
                    name="cuisine"
                    value={reviewData.cuisine}
                    onChange={handleReviewInputChange}
                    />
                </label>
            <br></br>
                <label>
                    Size of Dish: 
                    <input
                    placeholder='Scale of 0-3'
                    type="number"
                    name="dish_size"
                    value={reviewData.dishSizeRating}
                    onChange={handleReviewInputChange}
                    />
                </label>
            <br></br>
                <label>
                    Rank the Dish:
                    <input
                    placeholder='Scale of 1 - 9'
                    type="number"
                    name="score"
                    value={reviewData.dishRanking}
                    onChange={handleReviewInputChange}
                    />
                </label>
            <br></br>
                <button type="submit">Add Review</button>
            </form>
        </div>
    )
}

export default AddReview
