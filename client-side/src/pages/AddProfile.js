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

    const inputStyling = {
        width: '80%',
        marginLeft: '5vh',
        marginTop: '5vh',
        padding: '2vh',
        borderRadius: '10px',
        border: '1px solid #8d4843', // Dark tan outline color
        boxSizing: 'border-box',
        fontSize: '16px',
        color: 'black',
        outline: 'none', // Remove blue outline on hover
        backgroundColor: '#ede4da',
    }

    const buttonStyling = {
        width: '80%', // Set width to 100%
        backgroundColor: '#8d4843',
        color: '#ede4da',
        marginLeft: '5vh',
        marginTop: '5vh',
        padding: '2vh',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        fontSize: '16px', // Match font size with the input
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px',
    }


    return (
        <>
            
            <form 
            className='form-submit'
            onSubmit={handleNewProfileSubmit}
            >
                <input 
                style={inputStyling}
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleNewProfileInput}
                ></input>
                <input 
                style={inputStyling}
                type="text" 
                name="firstname"
                placeholder="First Name"
                onChange={handleNewProfileInput}
                ></input>
                <input 
                style={inputStyling}
                type="text" 
                name="lastname"
                placeholder="Last Name"
                onChange={handleNewProfileInput}
                ></input>
                <input 
                style={inputStyling}
                type="text" 
                name="location"
                placeholder="City, State"
                onChange={handleNewProfileInput}
                ></input>
                <button 
                type="submit"
                style={buttonStyling}
                >Create</button>
            </form>
        </>
    )
}

export default AddProfile