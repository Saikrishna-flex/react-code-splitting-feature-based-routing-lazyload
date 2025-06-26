import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Settings = () => {
  return (
    <div>
      <h1>⚙️ Settings Page</h1>
      <nav style={{display:'flex', gap:'1rem', justifyContent:'center'}}>
        <NavLink to='profile'>Profile</NavLink>
        <NavLink to='security'>Security</NavLink>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Settings
