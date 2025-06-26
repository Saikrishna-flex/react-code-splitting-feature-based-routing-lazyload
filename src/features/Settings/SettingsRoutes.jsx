import React, { Suspense, lazy } from 'react'
import Loader from '../../components/Loader/Loader';
import { Route } from 'react-router-dom';
import SecuritySettings from './SecuritySettings/SecuritySettings';
import ProfileSettings from './ProfileSettings/ProfileSettings';

const Settings = lazy(() => import('../Settings/Settings'));

const SettingsRoutes = () => {
  return (
    <Route
    path='/settings'
    element={
        <Suspense fallback={<Loader name='Settings'/>}>
            <Settings/>
        </Suspense>
    }
    >
        <Route index element={<ProfileSettings/>} />
        <Route path='profile' element={<ProfileSettings/>} />
        <Route path='security' element={<SecuritySettings/>} />

    </Route>
  )
}

export default SettingsRoutes
