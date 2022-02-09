import {Container, Row, Col, Button} from 'react-bootstrap'

function ToDoItem({ toDo }) {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col sm={2}>{toDo.toDo}</Col>
                <Col sm={2}>{toDo.month}</Col>
                <Col sm={2}> <Button variant="danger" size="sm">Remove</Button></Col>
                <Col sm={2}><Button size="sm">View More</Button></Col>
            </Row>
            <br />
        </Container>
    )
}

export default ToDoItem