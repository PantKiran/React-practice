import React from 'react'
import { useState, useEffect } from 'react';

const Fetch = () => {
    const [name,setName] = useState('')
  const [lotteryno,setLotteryNO] = useState('')


  const info=()=>{
    setName(prev=>alert('hello'))
    setLotteryNO(prev=>alert('world'))
  }
  return (
    <div>
        <div className="lottery">
        <input type="text"  onKeyUp={(e)=>setName(e.target.value)} placeholder=" Enter your Name"/>
        <input type="text" onKeyUp={(e)=>setLotteryNO(e.target.value)} name="" id=""  placeholder=" Enter Lottery NO"/><br />
        <button onClick={()=> fetch(`http://localhost:3000/winners/`+name).then(res=>alert(res.message))}>submit</button>
        </div>
    </div>
  )
}

export default Fetch