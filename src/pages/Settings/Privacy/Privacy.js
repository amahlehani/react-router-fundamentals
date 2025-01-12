import React from 'react';
import "./Privacy.css";

const Privacy = () => {
  return (
    <div>
      <h2>Privacy Settings</h2>

      <p className='text'>
        Manage your privacy preferences here. 
        You can adjust who can see your personal information 
        and set visibility options for your profile.
      </p>

      <ul className='list'>
        <li>
          <input type="checkbox" id="show_email" />
          <label for="show_email">Show email address</label>
        </li>
        <li>Set profile visibility to :
          <select name="profile_visibility" id="profile_visibility">
            <option value="public">Public</option>
            <option value="private">Private</option>
            <option value="friends">Friends Only</option>
          </select>
        </li>
        <li>Disable search engine indexing for your profile</li>
      </ul>
    </div>
  )
}

export default Privacy