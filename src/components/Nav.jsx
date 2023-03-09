import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { icons } from '../service/icons'

function Nav() {


    const { pathname } = useLocation()

    return (
        <>
            <div className="main_nav">
                <ul className="nav_items">
                    <li><Link className={pathname === "/" ? "nav_link selected_link" : "nav_link"} to="/">Dashboard</Link></li>
                    <li><Link className={pathname === "/quote-requests" ? "nav_link selected_link" : "nav_link"} to="/quote-requests">Quote request</Link></li>
                    <li><Link className={pathname === "/jobs" ? "nav_link selected_link" : "nav_link"} to="/jobs">Jobs</Link></li>
                    <li><Link className={pathname === "/newsletters" ? "nav_link selected_link" : "nav_link"} to="/newsletters">Newletters</Link></li>
                    <li><Link className={pathname === "/blog" ? "nav_link selected_link" : "nav_link"} to="/blog">Blog</Link></li>
                </ul>

                <div className="profile_box">
                    <p>Jane Doe</p>
                    <img src={icons.prIcon} alt="profile" />
                </div>
            </div>
        </>
    )
}

export default Nav