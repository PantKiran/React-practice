import React from 'react'
import { useState } from 'react';

export const UseStateEx3 = () => {
    const name=['kiran','harry','sunil']
    const [nameList,getNameList] = useState(name)
 
    const Delete=()=>{
        nameList.pop()
        getNameList([...nameList])

    }
  return (
    <div>
    {nameList.map((val)=>{
        return <li>{val}</li>

    })}
    <button onClick={()=>Delete()}>Delete</button>
     
    </div>
  )
}
