import React from "react";
import { useState, useEffect } from "react";

const Chocolatewinner = () => {
  const [name, setName] = useState('');
  const [userList, setuserList] = useState([]);
  const [randomNo, setRandomNo] = useState(null)

// CRUD Operations 

  // read the users form the database(Read)
  const getusers = async()=>{
     const res = await fetch("http://localhost:3000/users");
     const data = await res.json();
     setuserList(data.users)
  }

  useEffect(() => {
    getusers()
      
  }, []);

  // to post data into database (Create)

  const sendData = async() => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({name: name, isWinner: false}),
      };
      const response = await fetch("http://localhost:3000/register/", requestOptions)
      if(response){
        getusers()
      }
  };
  
 // to delete the user form the database(Delete)
 
 const deleteUser=async(index)=>{
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  };
   const response= await fetch("http://localhost:3000/users/"+index, requestOptions)
  if(response){
    getusers()  
  }
 };
 
 // gerate the random number to match with index number of the userlist
 const generateRandom=()=>{
    setTimeout(()=>{
      setRandomNo(Math.floor(Math.random()* userList.length))
      // console.log(Math.floor(Math.random()*5))
    },2000)
 }

 // Update the user
 const confirmWinner=async()=>{
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name:userList[randomNo].name}),
  };
  const response= await fetch("http://localhost:3000/users", requestOptions)
  if(response){
    getusers()
  }
 }

 
  return (
    <div>
      
     
      <input
        onKeyUp={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
      />
      <button onClick={() => sendData()}>Register</button>

      {userList.length>0 ? userList.map((item,id)=>{
        return <li style={{backgroundColor:randomNo===id? 'green':'null'}}>{item.name}
        {<button onClick={()=>deleteUser(item._id)}>Delete</button>}
        </li>
      }): 'loading'}


      <button onClick={()=>generateRandom()}>Get winner</button>
      <button onClick={()=>confirmWinner()}>Confirm Winner</button>

      

    </div>
  );
};

export default Chocolatewinner;
