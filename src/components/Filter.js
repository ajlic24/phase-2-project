import { Container, Row, Col, Button, Form } from 'react-bootstrap'

function Filter({ onChange, handleClick }) {
    
    function handleChange(e) {
        onChange(e.target.value)
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col sm={4} >
                    <Form.Select onChange={handleChange} >
                        <option>Filter by month</option>
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                    </Form.Select>
                </Col>
                <Col md={3}><Button onClick={handleClick} >Sort ascending</Button></Col>
            </Row>
        </Container>
    )
}

export default Filter