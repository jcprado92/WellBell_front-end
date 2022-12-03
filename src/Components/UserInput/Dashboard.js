import React from 'react'
import {reminderType} from "./UserIntakeForm"

export default function Dashboard({reminderType}) {
  console.log(reminderType)

  return (
    <div>
      <div>
            <h2>Well Bells</h2>
            <h3>Your reminder type:</h3>
            <img alt='Physical' height='150' width='150'  src='https://cdn-icons-png.flaticon.com/512/2917/2917805.png'/>
            <img alt='Nutritional' height='150' width='150' src='https://cdn-icons-png.flaticon.com/512/3274/3274038.png'/>
            <img alt='Self-Care' height='150' width='150' src='https://cdn-icons-png.flaticon.com/512/3158/3158969.png'/>
        </div>
        <div>
            <h2>Wellness Points:</h2>
            <h3>Physical</h3>
            {/* insert progress bar here */}
            <h3>Nutritional</h3>
            {/* insert progress bar here */}
            <h3>Self-Care</h3>
            {/* insert progress bar here */}

        </div>
    </div>
  )
}
