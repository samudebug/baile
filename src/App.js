import './App.css';
import Clock from './clock/Clock';
import banner from './assets/banner.png'
import {Image, Container, Row, Col} from 'react-bootstrap';
function App() {
  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col md={12} className="d-flex justify-content-center  text-center ">
        <Image fluid src={banner} className="d-block m-auto banner"/>
        </Col>

      </Row>
      <Row>
      <Clock />
      </Row>
      
    </Container>
  );
}

export default App;
