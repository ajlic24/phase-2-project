import {Container, Row, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function ToDoItem({ toDo, onDelete}) {

    function handleDelete() {
        fetch(`http://localhost:3001/plans/${toDo.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
            .then(r => r.json())
            .then(() => onDelete(toDo.id))
    }

    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col sm={2}>{toDo.toDo}</Col>
                    <Col sm={2}>{toDo.month}</Col>
                    <Col sm={2}> <Button variant="danger" size="sm" onClick={handleDelete} >Remove</Button></Col>
                    <Col sm={2}><Link to={`/${toDo.id}`} ><Button size="sm" variant='success' >View More info</Button></Link></Col>
                </Row>
                <br />
            </Container>
        </>
    )
}

export default ToDoItem