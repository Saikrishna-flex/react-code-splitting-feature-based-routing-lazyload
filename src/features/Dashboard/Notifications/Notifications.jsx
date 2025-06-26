import React from 'react'

const Notifications = () => {
  const messages = [
    { id: 1, text: '🔔 New user signed up' },
    { id: 2, text: '⚠️ Server load is high' },
    { id: 3, text: '✅ Backup completed successfully' }
  ];
  return (
    <div>
        <h2>🔔 Notifications</h2>
        <ul>
          {messages.map((message) => <li key={message.id}>{message.text}</li> )}
        </ul>
    </div>
  )
}

export default Notifications
