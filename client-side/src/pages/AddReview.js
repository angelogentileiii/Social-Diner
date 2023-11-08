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

    const formStyling = {
        display: 'flex',
        justifyContent: 'flex-start'
    }

    const inputStyling = {
        display: 'flex',
        width: '200%',
        marginLeft: '5vh',
        padding: '2vh',
        borderRadius: '10px',
        border: '1px solid #8d4843',
        boxSizing: 'border-box',
        fontSize: '16px',
        color: 'black',
        outline: 'none',
        backgroundColor: '#ede4da',
    }

    const buttonStyling = {
        width: '200%',
        backgroundColor: '#8d4843',
        color: '#ede4da',
        marginLeft: '5vh',
        marginTop: '5vh',
        padding: '2vh',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px',
    }

    return(
        // <div style={divStyling}>
            <form onSubmit={handleReviewSubmit}>
                    <input
                    style={inputStyling}
                    placeholder='Restaurant'
                    type='text'
                    name='restaurant_name'
                    value={reviewData.restaurant_name}
                    onChange={handleReviewInputChange}
                    />
            <br></br>
                    <input
                    style={inputStyling}
                    type="text"
                    placeholder='Name of Dish'
                    name="dish_name"
                    value={reviewData.dish_name}
                    onChange={handleReviewInputChange}
                    />
            <br></br>
                    <input
                    style={inputStyling}
                    placeholder='Cuisine Type'
                    type="text"
                    name="cuisine"
                    value={reviewData.cuisine}
                    onChange={handleReviewInputChange}
                    />
            <br></br>
                    <input
                    style={inputStyling}
                    placeholder='Dish Size (Scale of 0-3)'
                    type="number"
                    name="dish_size"
                    value={reviewData.dishSizeRating}
                    onChange={handleReviewInputChange}
                    />
            <br></br>
                    <input
                    style={inputStyling}
                    placeholder='Dish Score (Scale of 1 - 9)'
                    type="number"
                    name="score"
                    value={reviewData.dishRanking}
                    onChange={handleReviewInputChange}
                    />
            <br></br>
                <button 
                type="submit"
                style={buttonStyling}
                >Add Review</button>
            </form>
        // </div>
    )
}

export default AddReview
