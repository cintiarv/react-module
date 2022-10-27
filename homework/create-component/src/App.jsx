import React from 'react'
import { Card } from './component/Card'

const userInfo = {
  profImg:'src/assets/image-victor.jpg',
  name:'Victor Crest',
  age : '26',
  location:'London',
  followersAmount:'80',
  likesAmount:'803',
  photosAmount:'1.4'
}

function App () {
  return (
    <Card 
    profImg={userInfo.profImg}
        name={userInfo.name}
        age={userInfo.age}
        location={userInfo.location}
        followersAmount={userInfo.followersAmount}
        likesAmount={userInfo.likesAmount}
        photosAmount={userInfo.photosAmount}
    />

  )
}

export default App
