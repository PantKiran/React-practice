import React from "react";
import { useState } from "react";
import "./LikeButton.css"
const LikeButton = () => {
  const [likeCount, setlikeCount] = useState(0);
  const [isLiked, setisLiked] = useState(false);

  return (
    <div className="container">
      <div className="user1">
        <h1>User One</h1>
        <button
          style={{ backgroundColor: isLiked == true ? "skyblue" : "red" }}
          onClick={() => {
            if (isLiked == true) {
              setlikeCount(0);
              setisLiked(false);
            } else {
              setlikeCount(1);
              setisLiked(true);
            }
          }}
        >
          {isLiked == false ? "Like" : "Liked"}
        </button>
        <button>{likeCount}</button>
      </div>
      <div className="user2">
        <h1>User Two</h1>
        <button
          style={{ backgroundColor: isLiked == true ? "skyblue" : "red" }}
          onClick={() => {
            if (isLiked == true) {
              setlikeCount(0);
              setisLiked(false);
            } else {
              setlikeCount(1);
              setisLiked(true);
            }
          }}
        >
          {isLiked == false ? "Like" : "Liked"}
        </button>
        <button>{likeCount}</button>
      </div>
    </div>
  );
};

export default LikeButton;
