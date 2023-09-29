import { Container, Row, Col, Button } from 'react-bootstrap';

function SearchBar() {
    return (

        <Container fluid>
            <Row className='d-flex justify-content-center'>
                <Col className='col-6 d-flex justify-content-between border-bottom border-white pt-4 pb-4'>
                    <Button className='btn btn-light'>Best Match</Button>
                    <Button className='btn btn-light'>Highest Rated</Button>
                    <Button className='btn btn-light'>Most Reviewed</Button>
                    <hr />
                </Col>
            </Row>
            <Row>

            </Row>
        </Container>


    );
}
export default SearchBar;