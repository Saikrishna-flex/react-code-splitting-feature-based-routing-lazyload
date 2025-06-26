import { NavLink, Outlet } from 'react-router-dom'
import './App.css'
import AppRoutes from './routes/AppRoutes/AppRoutes'

function App() {

  return (
    <>
        <nav style={{display:'flex', gap:'1rem', justifyContent:'center'}}>
          <NavLink to='/dashboard'>Dashboard</NavLink>
          <NavLink to='/settings'>Settings</NavLink>
          <NavLink to='/reports'>Reports</NavLink>
        </nav>
        <AppRoutes/>
    </>
  )
}

export default App
