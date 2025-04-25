import React, { useState } from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import Category from '../Components/Category'
import { Link } from 'react-router-dom'


function Home() {
  const[uploadVideoResponse, setUploadVideoResponse] = useState({})
  const[dropVideoResponse,setDropVideoResponse] = useState({})
  return (
    <>
     <div className='container mt-3 mb-3 d-flex justify-content-between'>


      <div className="add-videos">
        <Add setUploadVideoResponse={setUploadVideoResponse} />
      </div>
      <Link to={'/watch-history'} style={{textDecoration:"none",fontSize:"30px",color:"blue"}}>Watch History <i className="fa-solid fa-clock-rotate-left fa-flip-horizontal"></i></Link>
      </div>

      <div className="container-fluid mt-5 mb-3 w-100 row">
        <div className="all-videos col-lg-9">
          <h2 className='text-info'>All-Videos</h2>
           <View uploadVideoResponse={uploadVideoResponse} setDropVideoResponse={setDropVideoResponse} />

        </div>
       
      <div className="category col-lg-3">
        <Category dropVideoResponse={dropVideoResponse}/>
      </div>

      </div>
    
    </>
  )
}

export default Home