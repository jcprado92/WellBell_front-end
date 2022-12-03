import React, {useState, useEffect } from "react";
import axios from "axios"

const API = process.env.REACT_APP_API_URL;

export default function UserIntakeForm() {

const[reminderType, setReminderType]= useState("")
const [toggle, setToggle] = useState(false);
const [bells, setBells] = useState([]);

    useEffect(() => {
      axios.get(`${API}/bells`)
      .then(res => {
        setBells(res.data.payload)
        })
      .catch(err => console.err);
    }, [])

const handleClick = (e) => {
  e.preventDefault();
  setReminderType(e.target.value)
  setToggle(!toggle);
}

const resetRadioState = () => {
  setReminderType('');
}

let filteredBells= []

  return (
    <div>
        <h2>Continue Your Wellness Profile</h2>
        <form >
            {/* <p>Select a Username</p>
            <input type="text" required placeholder="Username"></input>
            <br/> */}

            <p>Select the type of reminders you wish to receive</p>
            <div>
            <input type="radio"  id="physical" onChange={handleClick} checked={reminderType === "Physical"} value="Physical"/>Physical
            {/* <label htmlFor="physical">Physical</label> */}
            </div>
            <div>
            <input type="radio" id="nutrition" onChange={handleClick} checked={reminderType === "Nutrition"} value="Nutrition"/>Nutritional
            {/* <label htmlFor="nutrition">Nutritional</label> */}
            </div>
            <div>
            <input type="radio"  id="mental" onChange={handleClick} checked={reminderType === "Self-Care"} value="Self-Care"/>Self-Care
            {/* <label htmlFor="mental">Mental</label> */}
            </div>
            {
            filteredBells = bells.filter(bell=> bell.type === reminderType)
       }
        {console.log(filteredBells)}
        <button  type="reset"
          onClick={resetRadioState}>RESET</button>
            <p>{reminderType}</p>
        </form>
    </div>
  )
}

