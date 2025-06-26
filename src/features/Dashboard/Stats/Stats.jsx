import React from 'react'

const Stats = () => {
  const metrics = [
    { name: 'Bounce Rate', value: '47%' },
    { name: 'Session Duration', value: '3m 45s' },
    { name: 'Page Views', value: '8.5K' }
  ];

  return (
    <div style={{placeItems:'center'}}>
      <h2>📊 Stats</h2>
      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {
            metrics.map((metric, index) => (
              <tr key={index}>
                <td>{metric.name}</td>
                <td>{metric.value}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Stats
