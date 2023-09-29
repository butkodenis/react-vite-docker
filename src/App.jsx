//import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './App.scss';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {


  return (

    <Container fluid>
      <Row >
        <Col className="col-12 text-center header">
          <Header />
        </Col>
      </Row>
      <Row>
        <Col className="col-12 search-bar">
          <SearchBar />
        </Col>
      </Row>
    </Container>
  )
}

export default App
