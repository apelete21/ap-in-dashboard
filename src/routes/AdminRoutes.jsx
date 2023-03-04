import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Head from '../components/Head'
import Aside from '../components/Aside'
import Home from '../pages/Home'
import Nav from '../components/Nav'
import QuoteRequests from '../pages/QuoteRequests'
import Jobs from '../pages/Jobs'
import Newsletters from '../pages/Newsletters'
import Blog from '../pages/Blog'
import AddNewJob from '../pages/AddNewJob'
import ApplicationList from '../pages/ApplicationList'
import Login from '../pages/Login'
import { AppContext } from '../Contexts/AppContext'

function AdminRoutes() {

    const { login } = useContext(AppContext)

    if (login) return (

        <>

            <Head />

            <div class="main_wrapper">

                <Aside />

                <div class="main">

                    <Nav />

                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/quote-requests' element={<QuoteRequests />} />
                        <Route path='/jobs' element={<Jobs />} />
                        <Route path='/jobs/new' element={<AddNewJob />} />
                        <Route path='/jobs/applications' element={<ApplicationList />} />
                        <Route path='/newsletters' element={<Newsletters />} />
                        <Route path='/blog' element={<Blog />} />
                    </Routes>
                </div>
            </div>
        </>
    )

    if (!login) return (
        <Routes>
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}

export default AdminRoutes