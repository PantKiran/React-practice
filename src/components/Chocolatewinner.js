import React from "react";
import { useState, useEffect } from "react";

const Chocolatewinner = () => {
  const [name, setName] = useState('');
  const [userList, setuserList] = useState([]);

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
  const sendData = () => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, isWinner: false }),
      };
      fetch("http://localhost:3000/register", requestOptions)
      .then(res=>getusers())
  };
  
 // to delete the user form the database(Delete)
 const deleteUser=()=>{
  const requestOptions = {
    method: "DELETE",
    // headers: { "Content-Type": "application/json" },
    // body: JSON.stringify({ name: name, isWinner: false }),
  };
  fetch("http://localhost:3000/users", requestOptions)
  .then(res=>getusers())
 };
 
 // update user in database(update)
 const updateUser=()=>{
    
 }
  return (
    <div>
      
      {userList.length>0 ? userList.map((item,id)=>{
        return <li>{item.name}
        {<button onClick={()=>deleteUser()}>Delete</button>}
        {<button onClick={()=>updateUser()}>Update</button>}</li>
      }): 'loading'}

      <input
        onKeyUp={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
      />
      <button onClick={() => sendData()}>Register</button>

      

    </div>
  );
};

export default Chocolatewinner;
