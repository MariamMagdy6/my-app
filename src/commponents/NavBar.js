import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BasicExample from '../Pages/login'
function ColorSchemesExample() {
    return (
        <Navbar style={{width: '100%'}}>
          <Container >
            <div>
            <a href='/Home'><img  id='logo' src='logo.svg' alt='kmkl'/></a>
            <h3 className='mini'> Minimal <span style={{color:'#F61B5A'}}>Shop</span>ping </h3>
            </div>
            <div>
            <a href='/Login'><img id='user' src="Vector.svg"/></a>
            </div>
          </Container>
        </Navbar>
      );
}
export default ColorSchemesExample;