import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddProfile({ userData, setUserData }){
    const [newProfile, setNewProfile] = useState({
        reviews: []
    });

    const navigate = useNavigate();

    function handleNewProfileInput(event){
        const {value, name} = event.target;

        setNewProfile({...newProfile,
            [name] : value
        })
    }

    function handleNewProfileSubmit(event){
        event.preventDefault();

        fetch(`http://localhost:3000/profiles`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newProfile)
        })
        .then(response => {
            if (response.ok) {
                return response.json().then((returnedData) => {
                    setUserData([...userData, returnedData])
                    navigate("/profiles")
                })
            }
        })

    }


    return (
        <form onSubmit={handleNewProfileSubmit}>
            <input 
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleNewProfileInput}
            ></input>
            <input 
            type="text" 
            name="firstname"
            placeholder="First Name"
            onChange={handleNewProfileInput}
            ></input>
            <input 
            type="text" 
            name="lastname"
            placeholder="Last Name"
            onChange={handleNewProfileInput}
            ></input>
            <input 
            type="text" 
            name="location"
            placeholder="City, State"
            onChange={handleNewProfileInput}
            ></input>
            <button type="submit">Create</button>
        </form>
    )
}

export default AddProfile