import React from 'react'
import React, { useState, useEffect } from 'react';

const UseEffect2 = () => {
    const [time,setTime] = useState(0)
    useEffect(()=>{
      previous=previous+1    
    },[time])
  return (
    <div>
     {time}
    </div>
  )
}

export default UseEffect2