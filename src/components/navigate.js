
import {Container, Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';


function navigate() {

 return (
    
  <Navbar bg="dark" expand="lg" variant="dark" style={{margin:0}}>
  <Container>
    <Navbar.Brand className="bartitle" href="/">
      <img src="img/logowhite.png" width='35' height='35' style={{marginTop:"20%"}}/>
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="pages-name">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        
      </Nav>
      <Form className="search-all d-flex">
      <FormControl
        style={{fontSize:"1.5rem", marginRight:"2%", marginTop:"7%"}}
        type="search"
        placeholder="Search"
        className="mr-2 search-box"
        aria-label="Search"
      />
      <Button variant="outline-light" style={{marginTop:"7%"}}>Search</Button>
    </Form>
    </Navbar.Collapse>
    
  </Container>
</Navbar>
  
 );
 }

export default navigate;