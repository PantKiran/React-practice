import React from 'react'
import { useState } from 'react'
const UseStateEx2 = () => {
      const birthYear = 1974
      const a = new Date()
      const currentYear= a.getFullYear()
      const  [age, setAge] = useState()
   
  return (
    <div className='container'> 
    <button onClick={()=>setAge(currentYear-birthYear)}>GetAge</button>
    <h1>your Age is  {age}</h1>
    </div>
  )
  }
export default UseStateEx2