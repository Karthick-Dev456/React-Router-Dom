import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Student from './pages/Student'
import StudentView from './pages/StudentView'

import BlogLayout from './layouts/BlogLayout'
import BlogList from './pages/blog/BlogList'
import BlogCreate from './pages/blog/BlogCreate'
import BlogUpdate from './pages/blog/BlogUpdate'
import BlogView from './pages/blog/BlogView'

import DashboardLayout from './pages/dashboards/DashboardLayout'
import Dashboard from './pages/dashboards/Dashboard'
import DashboardStats from './pages/dashboards/DashboardStats'
import DashboardSettings from './pages/dashboards/DashboardSettings'

import QueryPage from './pages/QueryPage'
import ProtectedRoute from './components/ProtectedRoute'
import Payment from './pages/Payment'
import NotFound from './components/NotFound'



const App = () => {

    const location = useLocation()

    return (
        <>
            {location.pathname !== '/' && <Navbar />}

            {/* <Navbar /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/student" element={<Student />} />
                <Route path="/student/:id" element={<StudentView />} />
                <Route path="/blog" element={<BlogLayout />}>
                    <Route index element={<BlogList />} />
                    <Route path="create" element={<BlogCreate />} />
                    <Route path="update/:id" element={<BlogUpdate />} />
                    <Route path="view/:id" element={<BlogView />} />
                </Route>

                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="stats" element={<DashboardStats />} />
                    <Route path="settings" element={<DashboardSettings />} />
                </Route>

                <Route path="/query/page" element={<QueryPage />} />
                <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />

                <Route path="*" element={<NotFound />} />


            </Routes>
        </>
    )
}

export default App