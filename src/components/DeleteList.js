import React from 'react'
import { useState } from 'react'
import "./DeleteList.css"

const DeleteList = () => {
const manArr = ['kiran', 'niraj', 'diwas', 'aone','nabin']
const womanArr=['rita','gits','sneha','nabina','sita']

const [manList, setName] = useState(manArr)
const [womanlist, setWoman]= useState(womanArr)

 
const deleteMan=()=>{
    manList.pop()
    setName([...manList])
}

const deleteWoman=()=>{
  womanlist.pop()
   setWoman([...womanlist])

}


  return (
     <div className="container">
    <div className='man'>
    <table border={3} >
    {manList.map((val)=>{
    return <li>{val}</li>
    })}
    <button onClick={()=>deleteMan()}>Delete Man</button>
    </table>
     </div>

    <div className='woman'>
    <table  border={3}>
     {womanlist.map((val)=>{
      return <li>{val}</li>
     })}
    <button onClick={()=>deleteWoman()}>Delete Woman</button>
    </table>
     </div>

     </div>
  )
}

export default DeleteList;