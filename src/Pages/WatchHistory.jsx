import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../services/allAPI'

function WatchHistory() {
  const [history, setHistory] = useState([])

  const getHistory = async () => {
    const result = await getHistoryAPI()
    console.log(result);
    if (result.status == 200) {
      setHistory(result.data)
    } else {
      console.log("API Failed")
      setHistory([])
    }
  }

  console.log(history);

  useEffect(() => {
    getHistory()
  }, [])

  const removeHistory = async (id) => {
    await deleteHistoryAPI(id)
    getHistory()
  }

  return (
    <div className="container-fluid p-3">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-3 mt-md-5 mb-4">
        <h1 className='text-info mb-3 mb-md-0'>Watch History</h1>
        <Link to={'/home'} style={{textDecoration:"none",color:"blueviolet",fontSize:"30px"}}>Back to Home <i class="fa-solid fa-arrow-rotate-left fa-spin fa-spin-reverse"></i></Link>
      </div>
      
      {/* Desktop Table */}
      <div className="d-none d-md-block">
        <table className='table table-responsive shadow mt-3 mb-3'>
          <thead>
            <tr>
              <th>#</th>
              <th>Video Title</th>
              <th>URL</th>
              <th>TimeStamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {history?.length > 0 ? history.map((video, index) => (
              <tr key={index}>
                <td className='text-warning'>{index + 1}</td>
                <td className='fw-bolder'>{video.title}</td>
                <td><a href={video.link} target="_blank" rel="noopener noreferrer">{video.link}</a></td>
                <td>{video.timeStamp}</td>
                <td>
                  <button className='btn btn-link p-0' onClick={() => removeHistory(video?.id)}>
                    <i className="fa-solid fa-trash text-danger"></i>
                  </button>
                </td>
              </tr>
            )) : 
            <tr>
              <td colSpan="5" className='text-center'>
                <p className='text-danger fw-bolder'>Nothing to Display</p>
              </td>
            </tr>}
          </tbody>
        </table>
      </div>
      
      {/* Mobile Cards */}
      <div className="d-md-none">
        {history?.length > 0 ? history.map((video, index) => (
          <div key={index} className="card shadow mb-3">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title text-warning">{index + 1}. {video.title}</h5>
                <button className='btn btn-link p-0' onClick={() => removeHistory(video?.id)}>
                  <i className="fa-solid fa-trash text-danger"></i>
                </button>
              </div>
              <p className="card-text">
                <small className="text-muted">{video.timeStamp}</small>
              </p>
              <a href={video.link} target="_blank" rel="noopener noreferrer" className="text-truncate d-block">
                {video.link}
              </a>
            </div>
          </div>
        )) : 
        <div className="alert alert-danger text-center fw-bold">
          Nothing to Display
        </div>}
      </div>
    </div>
  )
}

export default WatchHistory