import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    
    return (
        <>
            <div className="main_nav">
                <ul className="nav_items">
                    <li><Link className="nav_link" to="/">Dashboard</Link></li>
                    <li><Link className="nav_link" to="/quote-requests">Quote request</Link></li>
                    <li><Link className="nav_link" to="/jobs">Jobs</Link></li>
                    <li><Link className="nav_link" to="/newsletters">Newletters</Link></li>
                    <li><Link className="nav_link" to="/blog">Blog</Link></li>
                </ul>
            
                <div className="profile_box">
                    <p>Jane Doe</p>
                    <img src="../assets/media/images/post/bigstock.jpg" alt="" />
                </div>
            </div>
        </>
    )
}
