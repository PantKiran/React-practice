import React from 'react'
import  { useState, useEffect } from 'react';
import "./BoxColor.css"
const BoxColor = () => {
    const [Box, setBox] = useState([])
     const splitted = Box.split("=")
     const  arr = [splitted]
     const obj = Object.fromEntries(arr)
     console.log(obj)


  return (
    <div >
    
    <div className='BoxColor' style={obj}></div>
    <input onKeyUp={(e)=>setBox(e.target.value)}></input>
    </div>
  )
}

export default BoxColor