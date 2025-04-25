import React from 'react'
import Card from 'react-bootstrap/Card';
import { Button, Col, Row, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigateByUrl = useNavigate();

  return (
    <Container fluid>
      {/* Hero Section */}
      <Row className='mt-3 mt-md-3 d-flex align-items-center justify-content-center'>
        <Col xs={12} lg={5} className='order-lg-1 order-2 mt-3 mt-lg-0 text-center text-lg-start'>
          <h1 style={{color:"#60B5FF", fontSize:"clamp(28px, 5vw, 40px)"}}>
            Welcome to <span className='text-warning'>Media-Player</span>
          </h1>
          <p className='mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, hic explicabo itaque optio molestias eaque beatae ex praesentium ad reprehenderit.
          </p>
          <Button onClick={()=>navigateByUrl('/home')} className='btn btn-info mb-4 mb-lg-0'>
            Get Started
          </Button>
        </Col>
        <Col xs={12} lg={5} className='order-lg-2 order-1 d-flex justify-content-center'>
          <img 
            src="https://phoneky.co.uk/thumbs/screensavers/down/music/live4music_h6bwni57.gif" 
            alt="media-player" 
            style={{
              width:"100%", 
              maxWidth:"400px",
              height:"auto",
              maxHeight:"500px"
            }} 
          />
        </Col>
      </Row>

      {/* Features Section */}
      <div className='mb-5 mt-5 d-flex flex-column align-items-center justify-content-center w-100'>
        <h5 className='text-warning' style={{fontSize:"clamp(28px, 5vw, 40px)"}}>Features</h5>

        <Row className='mb-5 mt-5 justify-content-center w-100'>
          {/* Feature Card 1 */}
          <Col xs={12} md={6} lg={4} className='mb-4 d-flex justify-content-center'>
            <Card style={{ width: '20rem', maxWidth: '100%' }} className='bg-info'>
              <Card.Img 
                variant="top" 
                style={{ height: '250px', objectFit: 'cover' }} 
                src="https://i.pinimg.com/originals/e4/63/4d/e4634da841c0ed906e77cab9b6b733ef.gif" 
              />
              <Card.Body className='text-danger fw-bolder'>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          {/* Feature Card 2 */}
          <Col xs={12} md={6} lg={4} className='mb-4 d-flex justify-content-center'>
            <Card style={{ width: '20rem', maxWidth: '100%', backgroundColor:"#F8F4E1"}}>
              <Card.Img 
                variant="top" 
                style={{ height: '250px', objectFit: 'cover' }} 
                src="https://gifyard.com/wp-content/uploads/2023/04/Tumblr.gif" 
              />
              <Card.Body className='text-danger fw-bolder'>
                <Card.Title>Categorized Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Feature Card 3 */}
          <Col xs={12} md={6} lg={4} className='mb-4 d-flex justify-content-center'>
            <Card style={{ width: '20rem', maxWidth: '100%' }}>
              <Card.Img 
                variant="top" 
                style={{ height: '250px', objectFit: 'cover' }} 
                src="https://i.pinimg.com/originals/9d/9f/d1/9d9fd1e40f9ddcac105b3c99766db95a.gif" 
              />
              <Card.Body className='text-danger fw-bolder'>
                <Card.Title>Watch History</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Video Demo Section */}
      <Row className='border rounded p-3 p-md-4 border-light mt-5 justify-content-center align-items-center'>
        <Col xs={12} lg={5} className='mb-4 mb-lg-0'>
          <h4 className='text-warning'>Simple, Powerful & Fast</h4>
          <h6 className='mb-4 mt-4'>
            <span className='text-warning'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores itaque neque id harum dolorum qui et minima excepturi reiciendis iste!
          </h6>
          <h6 className='mb-4 mt-4'>
            <span className='text-warning'>Categorize Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores itaque neque id harum dolorum qui et minima excepturi reiciendis iste!
          </h6>
          <h6 className='mb-4 mt-4'>
            <span className='text-warning'>Managing Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores itaque neque id harum dolorum qui et minima excepturi reiciendis iste!
          </h6>
        </Col>

        <Col xs={12} lg={6} className='d-flex justify-content-center'>
          <div className="ratio ratio-16x9" style={{ maxWidth: '560px' }}>
            <iframe 
              src="https://www.youtube.com/embed/PGqltBCo6cU?si=qpfcXUgkpJBb-Jdy" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default LandingPage