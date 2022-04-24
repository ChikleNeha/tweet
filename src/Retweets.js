import React from 'react'
import ReImages from './ReImages'
import data from './data'

export default function Retweets(){

  const newData = data.map( item => <ReImages url = {item.url} />)

  return (
    <div className="retweets--like--images">
      <p><b>3</b>Retweets <b>7</b>Likes</p>
      {newData}
    </div>
  )
}