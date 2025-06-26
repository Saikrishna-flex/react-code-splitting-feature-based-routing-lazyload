import React from 'react'

const ErrorLogs = () => {
  const logs = [
    { id: 1, message: 'Auth failed for user admin', level: 'High' },
    { id: 2, message: 'Disk space low on /dev/sda1', level: 'Medium' },
    { id: 3, message: 'Unexpected logout event', level: 'Low' }
  ];

  return (
    <div>
      <h2>🐞 Error Logs</h2>
      <ul>
        {logs.map(log => (
          <li key={log.id}>
            <strong>[{log.level}]</strong> {log.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ErrorLogs
