import React from 'react'
import { useState } from 'react'

const Increment = () => {

 const [incre, setIncrement] = useState(0)

  return (
    <div className='container'>
        <button onClick={()=>setIncrement(incre+1)}>Increment</button>
        <button onClick={()=>setIncrement(incre-1)}>Decrement</button>
       <h1>{incre}</h1>
    </div>
  )
}

export default Increment