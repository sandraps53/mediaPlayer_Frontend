import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
       <Navbar className="bg-info">
        <Container>
          <Navbar.Brand  style={{border:"none"}}>
          <Link style={{textDecoration:"none",color:"#000000",fontWeight:"500",fontSize:"28px"}}>
          <i className="fa-solid fa-play fa-beat me-2 fs-3"></i>
          Media-Player
          </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header