import React from 'react'

export default function Endbar(){
  return (
    <div>
      <div className="end-bar">
      <img src="https://img.icons8.com/fluency-systems-regular/48/000000/topic.png"/>
      <img src="https://img.icons8.com/material-outlined/24/000000/retweet.png"/>
      <img src="https://img.icons8.com/fluency-systems-regular/48/000000/like--v1.png"/>
      <img src="https://img.icons8.com/material-outlined/24/000000/new-post.png"/>
      </div>
      <div className="reply">
         <img src="https://cdn-icons-png.flaticon.com/512/147/147142.png" width="35px" />
         <input type="text" placeholder="tweet your reply"/>
      </div>
      

    </div>
  )
}