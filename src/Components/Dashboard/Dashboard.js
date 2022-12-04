import React from 'react'
import {Routes, Route} from "react-router-dom"
import DashNav from './DashNav'
// import Profile from "../Dashboard/Profile.js"
// import Notifications from './Notifications.js
// import Rewards from "./Rewards.js"
import "./Dashboard.css"

function Dashboard() {
  return (
    <div className='dashboard'>
      <DashNav />
        {/* <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/bells" element={<Notifications/>} />
          <Route path="/rewards" element={<Rewards/>} />
        </Routes> */}
    </div>
  )
}

export default Dashboard