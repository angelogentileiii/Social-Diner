# Social Diner

A social platform for serious foodies. A bridge between commonly known social media platforms of today and food rating applications with a focus on specific dishes and creating your own dining profile!

Upon landing on the application, you will have a navigatable home page with a small collection of food-related articles and instagram profiles. In your sidebar navigation, you can choose to login with your email and password in order to have access to creating new reviews, creating new local profiles, and viewing all current profiles and reviews.

## Run the App

After you fork and clone this repository to your local directory, you can open your local terminal and run the following (in separate terminal windows):

```javascript 
npm run server
```

_This will host the local JSON server with our local database of information._

```javascript
node app.js
```

_This will host the authentication server for your login credentials. Your login must be an email address and a 9-character password. 
If an account associated with your email does not exist, you will be prompted to create a new account for your email._

```javascript
npm start
```

_This will start the react app and redirect you to a browser with the running app._ 

### Now feel free to enjoy!

## Future Goals

We hope to expand this application at a later date in order to include, at minimum, the following functionalities:

    - A proper RSS feed with daily updates to our news platforms and social media accounts
    - The ability to connect your individual login with your profile only and redirect to your individual home page
    - A "friends" page connected to your profile to add/remove other users and build your dining network
    - The ability to like, comment, and save individual dish reviews to a "Want to Eat" list
    - Integrate compatibility with personal social media pages as well as a functionality to create posts with geo-tagging and images

    And much more!


## Credentials

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project uses data and images from their respective news outlets (currently hard coded into a local JSON file).
