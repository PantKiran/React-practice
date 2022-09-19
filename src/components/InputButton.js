import React from 'react'
import  { useState } from 'react';

const InputButton = () => {
    const Name=['mango','banana','apple','gauva','orange','kiwi','Draganfruit']
    const [Fruits,setFruits] = useState(Name)
    const [newList,setnewList] = useState('')
 const deleteFunc=()=>{
    const final=Fruits.filter((val)=>{
       return val!==newList
    })
    setFruits(final)


 }


  return (
    <div>
    <input type="text" placeholder='Name' onKeyUp={(e)=>setnewList(e.target.value)} />
       {Fruits.map((item,id)=>{
        return <li>{item}</li>
       })
       }
       <button onClick={()=>deleteFunc()}>Delete</button>
    </div>
  )
}





export default InputButton