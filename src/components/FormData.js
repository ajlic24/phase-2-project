import { Container, Form, Row, Col, Button } from 'react-bootstrap'

function FormData({handleChange, handleSubmit, formData}) {
    return (
        <Container>
            <Form onSubmit={handleSubmit} >
                <Row className="justify-content-md-center">
                    <Col sm={4}>
                        <Form.Control type="text" value={formData.toDo} name='toDo' onChange={handleChange} />
                    </Col>
                    <Col sm={2} >
                        <Form.Select onChange={handleChange} name='month' value={formData.month} >
                            <option>Select month</option>
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
                </Row>
                <br />
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <Form.Control type="text" value={formData.image} name='image' onChange={handleChange} />
                    </Col>
                </Row>
                <br />
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <Form.Control as="textarea" style={{ height: '100px' }} value={formData.description} name='description' onChange={handleChange} />
                    </Col>
                </Row>
                <br />
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default FormData