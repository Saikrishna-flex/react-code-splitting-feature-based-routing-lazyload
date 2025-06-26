import React from 'react'

const Overview = () => {
  const stats = [
    {label: 'Users', value: '2344'},
    {label: 'Sessions', value: '4823'},
    {label: 'Revenue', value: '$19450'}
  ]
  return (
    <div>
      <h2>📈 Overview</h2>
      <ul>
        {stats.map((stat, index) => <li key={index}>{stat.label}: <strong>{stat.value}</strong></li>)}
      </ul>
    </div>
  )
}

export default Overview
