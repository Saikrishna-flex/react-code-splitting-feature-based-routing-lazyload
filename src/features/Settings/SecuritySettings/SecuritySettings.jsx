import React from 'react'

const SecuritySettings = () => {
  const settings = [
    { id: 1, label: 'Two Factor Auth', status: 'Enabled' },
    { id: 2, label: 'Login Alerts', status: 'Disabled' },
    { id: 3, label: 'App Passwords', status: 'Enabled' }
  ];

  return (
    <div>
        <h2>🔐 Security Settings</h2>
        <ul>
          {
            settings.map((setting) =>(
              <li key={setting.id}>
                {setting.label}: <strong>{setting.status}</strong>
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default SecuritySettings
