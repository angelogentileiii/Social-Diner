import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ErrorPage from './ErrorPage';

function Profile (){
    const [profile, setProfile] = useState({})

    const { username } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/profiles/${username}`)
        .then(response => response.json())
        .then(returnedData => {
            setProfile(returnedData)
        })
    }, [username])

    if(!profile.username) {
        return <ErrorPage />
    }

    // const dinerProfile = profile.map((profile) => {
        const {id, firstname, lastname, dishes_rated, reviews} = profile;
        
            const eachRestaurantRating = reviews.map((review, index) => {

                const {restaurant_name, ratings} = review

                    const dishRatings = ratings.map((rating, index)=> {

                        const {dish_name, cuisine, dish_size, score} = rating;
                        return (
                            <div key={index}>
                                <h5>Dish: {dish_name}</h5>
                                <li>Cuisine: {cuisine}</li>
                                <li>Size: {dish_size}</li>
                                <li>My Score: {score}</li>
                                <br></br>
                            </div>
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
                    <h4>Dishes Rated: {Number(dishes_rated)}</h4>
                    <ul>{eachRestaurantRating}</ul>
                </span>
            )

    }

//     return (
//         <div className="profiles">
//             {/* {dinerProfile} */}
//         </div>
//     )
// }

export default Profile