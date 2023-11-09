import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    
    const navigate = useNavigate();
        
    const onButtonClick = () => {

        // Set initial error values to empty
        setEmailError("")
        setPasswordError("")

        // Check if the user has entered both fields correctly
        if ("" === email) {
            setEmailError("Please enter your email")
            return
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError("Please enter a valid email")
            return
        }

        if ("" === password) {
            setPasswordError("Please enter a password")
            return
        }

        if (password.length < 7) {
            setPasswordError("The password must be 8 characters or longer")
            return
        }

        // Check if email has an account associated with it
        checkAccountExists(accountExists => {
            // If yes, log in 
            if (accountExists)
                logIn()
            else
            // Else, ask user if they want to create a new account and if yes, then log in
                if (window.confirm("An account does not exist with this email address: " + email + ". Do you want to create a new account?")) {
                    logIn()
                }
        })        
  

    }

    const checkAccountExists = (callback) => {
        fetch("http://localhost:3080/check-account", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({email})
        })
        .then(r => r.json())
        .then(r => {
            callback(r?.userExists)
        })
    }

    // Log in a user using email and password
    const logIn = () => {
        fetch("http://localhost:3080/auth", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({email, password})
        })
        .then(r => r.json())
        .then(r => {
            if ('success' === r.message) {
                localStorage.setItem("user", JSON.stringify({email, token: r.token}))
                props.setLoggedIn(true)
                props.setEmail(email)
                navigate("/profiles")
            } else {
                window.alert("Wrong email or password")
            }
        })
    }

    const inputStyling = {
        width: '90%',
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

    return <div className={"mainContainer"}>
        <br />
        <div className={"inputContainer"}>
            <input
                style={inputStyling}
                value={email}
                placeholder="Enter your email here"
                onChange={ev => setEmail(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{emailError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                style={inputStyling}
                value={password}
                placeholder="Enter your password here"
                onChange={ev => setPassword(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                style={buttonStyling}
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={"Log in"} />
        </div>
    </div>
}

export default Login