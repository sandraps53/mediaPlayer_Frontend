import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap'
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
} from 'react-bootstrap-icons';


function Footer() {
  return (
    <div>
     <Container>
     <Row className='mt-5 text-center text-md-start'>
       <Col md={3} lg={4}  className='mx-auto mb-4' >
         <div  className='fw-bold mb-4'>
          <div className='d-flex align-items-center mb-4'>
          <i className="fa-solid fa-play fa-beat me-3 fs-2"></i>
          <h4 className='fw-bold'>Media-Player</h4>
          </div>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, similique!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, similique!</p>
         </div>
       </Col>
       <Col md={2} lg={2}  className='mx-auto mb-4'>
        <h4 className='fw-bold mb-4 d-block'>Links</h4>
        <ul className='list-unstyled mb-0'>
        <li><a href="#!" className='text-reset text-decoration-none'>Landing Page</a></li>
           <li><a href="#!" className='text-reset text-decoration-none'>Home Page</a></li>
           <li><a href="#!" className='text-reset text-decoration-none'>Watch History</a></li>
        </ul>
       </Col>
     
       <Col md={2} lg={2}  className='mx-auto mb-4'>
        <h4 className='fw-bold mb-4'>Guides</h4>
         <ul className='list-unstyled mb-0'>
        <li><a href="#!" className='text-reset text-decoration-none'>React</a></li>
           <li><a href="#!" className='text-reset text-decoration-none'>React Bootstrap</a></li>
           <li><a href="#!" className='text-reset text-decoration-none'>Bootswatch</a></li>
        </ul>
       </Col>
     
       <Col md={5} lg={4} className='mx-auto mb-4'>
       <h4 className='fw-bold mb-4'>Contact Us</h4>
       <Form className="d-flex" >
            <Form.Control
              type="search"
              
              placeholder="Enter your Email ID"
              className="me-2 text-dark w-50"
              
            />
            <Button variant="warning">Subscribe</Button>
          </Form>
          <div className='d-flex align-items-center  mb-4'>
          <a href='!#' className='me-4 mt-2 text-reset'>
          <Facebook  className='fs-3'/>
          </a>
          <a href='!#' className='me-4 mt-2 text-reset'>
          <Twitter className='fs-3' />
          </a>
          <a href='!#' className='me-4 mt-2 text-reset'>
          <Instagram className='fs-3' />
          </a>
          <a href='!#' className='me-4 mt-2 text-reset'>
          <Linkedin className='fs-3' />
          </a>
         
          </div>
       </Col>

      </Row>
      

     </Container>
     <div className=' text-center text-white p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        Copyright  © {new Date().getFullYear()} Media Player Build with React.
       
      </div>
    </div>
  )
}

export default Footer