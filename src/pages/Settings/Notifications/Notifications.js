import React from 'react'

const Notifications = () => {
  return (
    <div>
      <h2>Notification Settings</h2>

      <p className='text'>
        Customize how and when you receive notifications. Stay updated without feeling
        overwhelmed.
      </p>

      <ul className='list'>
        <li>
          <input type="checkbox" id="show_notification" />
          <label for="show_notification">Receive email notifications for account activity.</label>
        </li>
        <li>
          <input type="checkbox" id="show_popup" />
          <label for="show_popup">Enable push notifications for messages and alerts.</label>
        </li>
        <li>Choose your notification preferences for promotions and updates.</li>
      </ul>
    </div>
  )
}

export default Notifications