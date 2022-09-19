import React from 'react'
import  { useState, useEffect } from 'react';

const LoginPostResuest =() => {

    const [errorMessage,seterrorMessage] = useState('')
    const [validatePassword,setvalidatePassword] = useState('')
    const [validateEmail, setvalidateEmail] = useState('')

   const sumbitFunc=()=>{
    const z = new RegExp("^([a-z].+[0-9]?.+)@([a-z].+)(\.)([a-z].+)$");
    const test = z.test(validateEmail)
    console.log(test)
if(test===true){
    seterrorMessage('welcome ')

}
else{
    seterrorMessage('does not match email and password')
}
   }
   

  return (
    <div>
,<h2>{errorMessage}</h2>
    <h1>LoginPostResuest</h1>
     <input  onKeyUp={(e)=>setvalidateEmail(e.target.value)}type='email' placeholder='Enter Email'/>
     <input onKeyUp={(e)=>setvalidatePassword(e.target.value)} type='password' placeholder='enter your password'/>
     <button onClick={()=>sumbitFunc()} type='submit'>submit</button>

    </div>
  )
  }
export default LoginPostResuest;