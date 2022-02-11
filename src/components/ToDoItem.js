import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ToDoItem({ toDo }) {

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col sm={2}>{toDo.toDo}</Col>
                <Col sm={2}>{toDo.month}</Col>
                <Col sm={3}><Link to={`/${toDo.id}`} ><Button size="sm" variant='success' >View More info</Button></Link></Col>
            </Row>
            <br />
        </Container>
    )
}

export default ToDoItem