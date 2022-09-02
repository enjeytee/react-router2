import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Settings from './Settings'
import Info from './Info'

function Profile() {
    return (
        <div>
            <h1>Profile Page</h1>
            <ul>
                <li><Link to='info'>Profile Info</Link></li>
                <li><Link to='settings'>Profile Settings</Link></li>
            </ul>
            <Routes>
                <Route
                    path='info'
                    element={<Info />}
                />
                <Route
                    path='settings'
                    element={<Settings />}
                />
            </Routes>
        </div>
    )
}
export default Profile
