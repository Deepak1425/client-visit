import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Headers = () => {
  return (
    <>
      <Navbar className="nav">
        <Container>
          <Navbar.Brand className='brand'>LLOYDS BANKING</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Headers