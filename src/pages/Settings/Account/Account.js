import React from 'react'

const Account = () => {
  return (
    <div>
      <h2>Account Settings</h2>

      <p className='text'>
        Manage your account details and preferences here. 
        Ensure your information is accurate and up-to-date.
      </p>

      <ul className='list'>
        <li>Update your username, email address and password.</li>
        <li>Link or unlink your social media accounts.</li>
        <li>Delete your account permanently.</li>
      </ul>
    </div>
  )
}

export default Account