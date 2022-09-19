import { useState } from "react";

const RotateImage = () => {
  const [positionX, setPositionX] = useState('0px')
  const [positionY, setPositionY] = useState('0px')
  const [Rotate, setRotate] = useState('rotate(20deg)')

  return (
    <div className="App">
         <div>
        <button onClick={()=> {
          setPositionX('0px')
          setPositionY('-200px')
          }}>Up</button>
        <button onClick={()=> {
          setPositionX('0px')
          setPositionY('200px')
          }}>Down</button>
        <button  onClick={()=> {
          setPositionY('0px')
          setPositionX('-200px')
          }}>Left</button>
        <button  onClick={()=> {
          setPositionY('0px')
          setPositionX('200px')}}>Right</button>
          <button onClick={()=>
          {
            setPositionY('0px')
          setPositionX('0px')
           setRotate('360deg')
          }}>Rotate</button>
      </div>
      <div style={{  padding: '150px'}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg" 
      width="120px"
      style={{marginTop: positionY, marginLeft: positionX , transform: Rotate }}
      height="120px"
      />
    </div>
    </div>
  )
}

export default RotateImage