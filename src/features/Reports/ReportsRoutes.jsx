import React, { Suspense, lazy } from 'react'
import { Route } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import SalesReport from './SalesReport/SalesReport';
import ErrorLogs from './ErrorLogs/ErrorLogs';

const Reports = lazy(() => import("./Reports"));

const ReportsRoutes = () => {
  return (
    <Route 
        path='/reports'
        element={
            <Suspense fallback={<Loader name='Reports'/>}>
                <Reports/>
            </Suspense>
        }
    >

        <Route index element={<SalesReport/>}/>
        <Route path='sales' element={<SalesReport/>}/>
        <Route path='errors' element={<ErrorLogs/>}/>

    </Route>
  )
}

export default ReportsRoutes
