import React from 'react'

const ProfileSettings = () => {
  const user = {
    name: 'Sai krishna',
    email: 'Sai@example.com',
    plan:'Pro'
  }
  return (
    <div>
      <h2>👤 Profile Settings</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Plan:</strong> {user.plan}</p>
    </div>
  )
}

export default ProfileSettings
