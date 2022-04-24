import React from 'react'
import ReImages from './ReImages'
import data from './data'

export default function Retweets(){

  const newData = data.map( item => <ReImages url = {item.url} />)

  return (
    
    <div>
        <div className="retweets--like--images">
            <p className="avatar"><b style={{color : "black"}}>3 </b>Retweets <b style={{color : "black"}}>7</b> Likes</p>
            {newData}
        </div>
        <div><hr /></div>
  </div>
  )
}