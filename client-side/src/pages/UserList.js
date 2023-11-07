
import { useNavigate } from "react-router-dom";

function UserList({ userData }){
    const navigate = useNavigate();

    function handleProfileClick(id){
        navigate(`/profiles/${id}`)
    }

    const eachUser = userData.map((user)=> {
        const {id, firstname, lastname, reviews} = user;
        const eachRestaurantRating = reviews.map((review, index) => {
            const {restaurant_name} = review
            return (
                <ul key={index}>
                    <h4>{restaurant_name}</h4>
                </ul>
            )
        })
        return (
            <span className="dinerCard" key={id}>
                <h3>{firstname} {lastname}</h3>
                <ul>Top Restaurants: {eachRestaurantRating}</ul>
                <button onClick={() => handleProfileClick(id)}>View Profile</button>
            </span>
        )
    })

    return (
        <div>
            {eachUser}
        </div>
    )
   

}

export default UserList