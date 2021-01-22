import './App.css';
import Clock from './clock/Clock';
import banner from './assets/banner2.png'
import footer from './assets/footer.png'
import {Image, Container, Row, Col} from 'react-bootstrap';
function App() {
  return (
    <Container className="wrapper" fluid>
      <Row className="justify-content-md-center banner-wrapper">
        <Col md={12} className="d-flex justify-content-center  text-center ">
        <Image fluid src={banner} className="d-block m-auto banner"/>
        </Col>

      </Row>
      <Row className="justify-content-md-center clock-wrapper">
        <Col md={12} className="align-self-center">
      <Clock />
      </Col>
      </Row>
      <Row className="justify-content-md-center footer-wrapper">
        <Image fluid src={footer} className="d-bloc m-auto footer"/>
      </Row>
      
    
    </Container>

  );
}

export default App;
