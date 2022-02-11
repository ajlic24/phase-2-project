import { Container, Button } from "react-bootstrap"
import { useParams, Link } from "react-router-dom"
import defaultImg from '../images/default.jpg'

function InfoPage({ data }) {
    const { id } = useParams()

    const toShow = data.find(item => item.id === parseInt(id))

    return (
        <div className="App">
            <h1>{toShow ? toShow.toDo : 'Loading'}</h1>
            <hr />
            <br />
            <br />
            <Container>
                {toShow ? (
                    <>
                        <img src={(toShow.image === '' || toShow.image === 'Place image source here...') ? defaultImg : toShow.image} style={{ height: '400px', width: '400px' }} />
                        <p><strong>When:</strong> {toShow.month} </p>
                        <p><strong>Description:</strong> {toShow.description} </p>
                    </>
                ) : 'Loading'}
            </Container>
            <Link to={`/${id}/edit`} ><Button >Edit</Button></Link>
        </div>
    )
}

export default InfoPage