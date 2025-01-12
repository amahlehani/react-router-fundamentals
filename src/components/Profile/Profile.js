import React from 'react';
import "./Profile.css";
import { useParams } from 'react-router-dom';
import Avatar from 'react-avatar';

const Profile = () => {
    const { username } = useParams();

    const userData = {
        name: username.charAt(0).toUpperCase() + username.slice(1),
        email: `${username}@example.com`,
        phone: "072 555 5555",
        address: "124 React Lane, Redux, Codevania, 7600",
        bio: "A passionate developer always ready to learn and explore new technologies."
    }
  return (
    <div>
        <h1>Welcome, {username}!</h1>
        <h2>Profile Information</h2>

        <Avatar
            name={userData.name}
            size='100'
            round
            className='avatar'
        />

        <p className='profile-info'>
            Name: {userData.name}
        </p>
        <p className='profile-info'>
            Email: {userData.email}
        </p>
        <p className='profile-info'>
            Phone: {userData.phone}
        </p>
        <p className='profile-info'>
            Address: {userData.address}
        </p>
        <p className='profile-info'>
            Bio: {userData.bio}
        </p>
    </div>
  )
}

export default Profile