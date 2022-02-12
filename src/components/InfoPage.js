import { Container, Button } from "react-bootstrap"
import { useParams, Link, useNavigate } from "react-router-dom"
import defaultImg from '../images/default.jpg'

function InfoPage({ data, onDelete }) {
    const { id } = useParams()
    const navigate = useNavigate()
    const toShow = data.find(item => item.id === parseInt(id))

    function handleDelete() {
        fetch(`http://localhost:3001/plans/${toShow.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
            .then(r => r.json())
            .then(() => {
                onDelete(toShow.id)
                navigate('/')
            })
    }

    return ( 
        <div className="App">
            <h1>{toShow ? toShow.toDo : 'Loading'}</h1>
            <hr />
            <br />
            <br />
            <Container>
                {toShow ? (
                    <>
                        <img src={(toShow.image === '' || toShow.image === 'Place image source here...') ? defaultImg : toShow.image} style={{ height: '400px', width: '400px' }} alt='' />
                        <p><strong>When:</strong> {toShow.month} </p>
                        <p><strong>Description:</strong> {toShow.description} </p>
                    </>
                ) : 'Loading'}
            </Container>
            <Button variant="danger" onClick={handleDelete} >Remove</Button> 
            <Link to={`/${id}/edit`} ><Button >Edit</Button></Link>
        </div>
    )
}

export default InfoPage