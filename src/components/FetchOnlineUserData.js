import e from "cors";
import React from "react";
import { useState, useEffect } from "react";

const FetchOnlineUserData = () => {
  const [User, setUser] = useState([]);
  const [SelectUser, setSelectUser] = useState("");
  const [serachOnlineUser,setsearchOnlineUser]= useState("")


  // searching user into list

    const serachedResult = User.filter((item) => {
      if (item.name.includes(serachOnlineUser)) {
        return item;
      }
    });
   

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUser(data.userList));
  }, []);

  // const getUser = () => {
  //   fetch("http://localhost:3000/users")
  //     .then((res) => res.json())
  //     .then((data) => setUser(data.userList));
  // };

  return (
    <div className="container">
      <div
        className="user"
        style={{
          display: "flex",
          paddingRight: "500px",
          border: "2px solid black",
        }}
      >
        {SelectUser}
      </div>

      <div className="userlist" style={{ paddingLeft: "200px" }}>
        <h1>FetchOnlineUserData</h1>
        <input
          onKeyUp={(e) => setsearchOnlineUser(e.target.value)}
          type="text"
          placeholder="Search Users"
        />
        {serachedResult.map((val, id) => {
          return (
            <li style={{ listStyle: "none" }}>
              <button
                onClick={() => setSelectUser(val.name)}
                style={{ listStyle: "none", color: "" }}
              >
                {val.name}
                {val.online ? (
                  <div style={{ color: "green", size: "100px" }}>&#8226;</div>
                ) : (
                  <div style={{ color: "red" }}>&#8226;</div>
                )}
              </button>
            </li>
          );
        })}

        {/* <button onClick={() => getUser()}>FetchUser</button> */}
      </div>
    </div>
  );
};

export default FetchOnlineUserData;
