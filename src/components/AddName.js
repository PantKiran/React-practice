import React from 'react'
import  { useState, useEffect } from 'react';


const AddName = () => {
    const [list, setlist] = useState([])
    const [Name, setName] = useState('')
    const [search, setSerach] = useState('')
    const Add=()=>{
        list.push({Name})
        setlist([...list])
    }
    
    
  return (
    <div>
    <h1>Add Name</h1>
       <input onKeyUp={(e)=>setSerach(e.target.value)} type="text" placeholder='search'/>
      <input onKeyUp={(e)=>setName(e.target.value)} type="text" placeholder='Name' />
      <button type='reset' onClick={()=>Add()}>Add</button>
      {list.map((item)=>{
        return <li key={item.id}>{item.Name}</li>
    })}
    
    </div>
  )
}

export default AddName