import { NavLink, Outlet } from "react-router-dom";

export default function Reports() {
  // throw new Error('Report page crashed!');
  return <>
      <h1>📈 Reports Page</h1>
      <nav style={{display:'flex', gap:'1rem', justifyContent:'center'}}>
        <NavLink to='sales'>Sales</NavLink>
        <NavLink to='errors'>Errors</NavLink>
      </nav>
      <Outlet/>
  </>
}

