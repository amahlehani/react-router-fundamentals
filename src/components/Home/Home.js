import React from 'react'
import "./Home.css";

const Home = () => {
  return (
    <div>
        <h1>Welcome to the Home Page</h1>
        <p className='home-text'>This is the default page for your React Router application.</p>
        <p className='home-text'>Navigate using the links above to explore the app!</p>
        <br/>

        <p className='home-text'>
          To access a profile, enter the username in the browser url after "http://localhost:3000/profile/"
        </p>
        <p className='home-text'>
          For example, entering "profile/johndoe" will load the profile page for the user "johndoe".
        </p>
    </div>
  )
}

export default Home