import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import FormData from "./FormData"

function EditPage({ data, onEdit }) {
    const { id } = useParams()
    const toShow = data.find(item => item.id === parseInt(id))
    const [formData, setFormData] = useState({
        month: '',
        image: '',
        description: '',
        toDo: '',
    })

    useEffect(() => {
        setFormData({
            month: toShow ? toShow.month : '',
            image: toShow ? toShow.image : '',
            description: toShow ? toShow.description : '',
            toDo: toShow ? toShow.toDo : '',
        })
    }, [toShow])

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:3001/plans/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(data => onEdit(data))
    }

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="App">
            <h1>Edit plan</h1>
            <hr />
            <br />
            <br />
            <FormData handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} />
        </div>
    )
}

export default EditPage