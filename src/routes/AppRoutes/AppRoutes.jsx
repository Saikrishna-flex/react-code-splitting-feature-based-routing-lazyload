import React, { Suspense, lazy } from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import Loader from '../../components/Loader/Loader';
import { ErrorBoundary } from '../../components/ErrorBoundary/ErrorBoundary';
import DashboardRoutes from '../../features/Dashboard/DashboardRoutes';
import SettingsRoutes from '../../features/Settings/SettingsRoutes';
import ReportsRoutes from '../../features/Reports/ReportsRoutes';
import App from '../../App';

const NotFound = lazy(() => import('../../pages/NotFound/NotFound'));

const AppRoutes = () => {
  return (
    <>
        <ErrorBoundary>
            <Suspense fallback={<Loader/>}>
                <Routes>
                  <Route path='/' element={<Navigate to='/dashboard' replace />} />
                  {DashboardRoutes()}
                  {SettingsRoutes()}
                  {ReportsRoutes()}
                  <Route path='*' element={<NotFound/>}/>
                </Routes>
            </Suspense>
        </ErrorBoundary>
    </>
  )
}

export default AppRoutes
