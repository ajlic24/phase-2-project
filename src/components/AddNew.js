import { useState } from 'react'
import FormData from './FormData'

function AddNew({ onSubmit }) {
    const [formData, setFormData] = useState({
        month: '',
        toDo: 'Enter your plan here...',
        description: 'Enter more info about the plan here...',
        image: 'Place image source here...'
    })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        const newObj = { ...formData }
        fetch(`http://localhost:3001/plans`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(newObj)
        })
            .then(r => r.json())
            .then(data => {
                onSubmit(data)
                setFormData({ month: '', toDo: '', description: '', image: '' })
            })
    }

    return (
        <div className='App' >
            <h1>New Plan</h1>
            <hr />
            <br />
            <br />
            <FormData handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} />
        </div>

    )
}

export default AddNew