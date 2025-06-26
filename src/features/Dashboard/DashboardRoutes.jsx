import React, { Suspense, lazy } from 'react'
import { Route } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import Overview from './Overview/Overview'
import Stats from './Stats/Stats'
import Notifications from './Notifications/Notifications'

const Dashboard = lazy(() => import('./Dashboard'))

const DashboardRoutes = () => {
  return (
    <Route 
        path='/dashboard'
        element={
            <Suspense fallback={<Loader name='Dashboard'/>}>
                <Dashboard/>
            </Suspense>
        }
    >
        <Route index element={<Overview />} />
        <Route path='overview' element={<Overview/>}/>
        <Route path='stats' element={<Stats/>} />
        <Route path='notifications' element={<Notifications/>} />

    </Route>
  )
}

export default DashboardRoutes
