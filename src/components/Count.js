import React from 'react'
import  { useState, useEffect } from 'react';

const Count = () => {
    const [count, setCount] = useState(0)
useEffect(()=>{
    // setCount(count+1)
})
  return (
    <div>
     {/* <button onClick={()=>setCount(count+1)}>Count</button> */}
     <h1>{count}</h1>
    </div>

  )
}

export default Count