import React from 'react'
import  { useState, useEffect } from 'react';

const UseEffectEx1 = ( ) => {
  const Friends =['nabin','niraj','aone','diwas','kiran' ]

    const [friendList, setFrirends]= useState(Friends)
    const[removeFriend, setRemove]= useState('')
   
      const delteteItem=()=>{

      const finalitem= friendList.filter((item,index)=>{
        // console.log(item)
        if( item!==removeFriend)
        return item
        
       })
       setFrirends(finalitem)

      }
    
    //  useEffect(()=>{
    //     console.log('hello')
    // },[])   
    

  return (
    <div>
    <input onKeyUp={(e)=>setRemove(e.target.value)} type="text"  placeholder='Enter a Name ' />
       {friendList.map((item)=>{
        return <li>{item}</li>
       })}
       <button onClick={()=> delteteItem()}>Delete</button>
    </div>
  )
}

export default UseEffectEx1