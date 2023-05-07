import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {

  fetch('https://fakestoreapi.com/users')
    .then(res=>res.json())
    .then(records => {
        this.setState({
        records: records
        })
    })
  .catch(error => console.log(error))
 
  return (
    <div>
      <div >
      <h2 id='HA'>Hello Again!</h2>
      <p id='WB'>Welcome Back You’ve Been Missed!</p>
      </div>
      
     <Form style={{margin:"50px"}}>
      <Form.Group  className="mb-3" controlId="formBasicEmail">
        <Form.Label className='FL'>Email address</Form.Label>
        <Form.Control className='form-control' type="email"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='FL'>Password</Form.Label>
        <Form.Control className='form_control' type="password"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="warning" type="submit">
        Submit
      </Button>
     </Form>
    </div>
  );
}

export default Login;