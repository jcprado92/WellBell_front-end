import React from 'react'
import DashNav from "./DashNav";
import "./About.css";

export default function About() {
  return (
    <div className='about-page'>
        <DashNav/>
    <div className='about-main'>
<div className='about-title'>
<h1>About WellBell</h1>
</div>
       <div className='about-info'>
<div className='our-mission'>
  <div className='our-mission-text'>
<h3>Our Mission</h3>
<h5>WellBell was designed with remote workers in mind!  As easy as it may be to work from the comfort of your home
it is just as easy to neglect your wellbeing while doing so. According to the American Psychiatric Association, the majority of  employees working from home have reported experiencing negative mental health impacts. WellBell is here to step in and help you take care of you with daily physical, nutritional and self care reminders! </h5>
<h3>Our Team</h3>
  </div>
</div>
<div className='our-team'>
  <div className='our-team-faces'>
  </div>
</div>
       </div>
    </div>
    </div>
  )
}