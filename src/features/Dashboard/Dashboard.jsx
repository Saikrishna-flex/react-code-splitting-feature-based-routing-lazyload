import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <h1>📊 Welcome to Dashboard</h1>

      <nav style={{marginBottom:'1rem', display:'flex', gap:'1rem', justifyContent:'center'}}>
        <NavLink to='overview'>OverView</NavLink>
        <NavLink to='stats'>stats</NavLink>
        <NavLink to='notifications'>notifications</NavLink>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Dashboard
