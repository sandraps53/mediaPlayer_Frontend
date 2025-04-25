import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { uploadVideoAPI } from '../services/allAPI';


function Add({setUploadVideoResponse}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // <iframe width="560" height="315" src="https://www.youtube.com/embed/Vl-vpjFscUs?si=3-1cMKoAMcVrF23O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  // https://youtu.be/aD9snLyynzM?si=aO09bhkZKASl8N4C
  // https://www.youtube.com/watch?v=dz3ik3XzR54

  const[uploadVideo,setUploadVideo] = useState({id:"",title:"",url:"",link:""})
  // console.log(uploadVideo);

  const getYouTubeLink = (e) => {
    const url = e.target.value.trim();
    let videoId = "";
  
    // Check for standard YouTube URL (watch?v=...)
    if (url.includes("v=")) { 
      videoId = url.split("v=")[1].substring(0, 11);
    }
    // Check for youtu.be/ short links
    else if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1].substring(0, 11);
    }
    // Check if already an embed link
    else if (url.includes("embed/")) {
      videoId = url.split("embed/")[1].substring(0, 11);
    }
  
    if (videoId) {
      setUploadVideo({ ...uploadVideo, link: `https://www.youtube.com/embed/${videoId}` });
    } else {
      setUploadVideo({ ...uploadVideo, link: "" });
      if (url) alert("Invalid YouTube URL. Try a full link like: https://www.youtube.com/watch?v=VIDEO_ID");
    }
  };

  const handleAdd=async()=>{
    const {id,title,url,link} = uploadVideo

    if(!id || !title || !url || !link){
      alert("Please fill all missing fields")
    }else{
      // upload video to json server
      const result = await uploadVideoAPI(uploadVideo)
      console.log(result);
      if(result.status >= 200 && result.status< 300){
        alert("Video uploaded successfully!")
        handleClose()
        setUploadVideo({id:"",title:"",url:"",link:""})
        setUploadVideoResponse(result.data)
      }else{
        alert(result.message)
      }
    }
  }

  return (
    <div>
      <div className="d-flex mb-5 mt-5 align-items-center">
          <h2>Upload Videos</h2>
          <button className='btn btn-link bg-warning m-2' onClick={handleShow}><i className="fa-solid fa-arrow-up-from-bracket fa-beat"></i></button>

          <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <FloatingLabel
        controlId="floatingInput0"
        label="VideoId"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter Video Id" onChange={(e)=>setUploadVideo({...uploadVideo,id:e.target.value})} />
      </FloatingLabel>
          <FloatingLabel
        controlId="floatingInput1"
        label="Video Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter Video Name" onChange={(e)=>setUploadVideo({...uploadVideo,title:e.target.value})}/>
      </FloatingLabel>
          <FloatingLabel
        controlId="floatingInput2"
        label="Image URL"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter Image URL" onChange={(e)=>setUploadVideo({...uploadVideo,url:e.target.value})} />
      </FloatingLabel>
          <FloatingLabel
        controlId="floatingInput3"
        label="Video URL"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter Video URL"  onChange={getYouTubeLink} />
      </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>

        </div>  
    </div>
  )
}

export default Add