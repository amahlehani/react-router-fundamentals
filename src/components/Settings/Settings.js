import React from 'react';
import "./Settings.css";
import { NavLink, Outlet } from 'react-router-dom';


const Settings = () => {
  return (
    <div>
        <h1>Settings</h1>
            <div className='settings-links'>
                <NavLink to="privacy" className='link' activeClassName="active-link">Privacy</NavLink>
                <NavLink to="notifications" className='link' activeClassName="active-link">Notifications</NavLink>
                <NavLink to="account" className='link' activeClassName="active-link">Account</NavLink>
            </div>
        <Outlet className='outlet' />
    </div>
  )
}

export default Settings