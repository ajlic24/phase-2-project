import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import { useEffect, useState } from 'react'
import React from 'react'
import Filter from './Filter'
import NavBar from './NavBar'
import AddNew from './AddNew'
import '../App.css'
import ToDoItem from './ToDoItem'
import InfoPage from './InfoPage'
import EditPage from './EditPage'

function App() {
  const [data, setData] = useState([])
  const [selectedMonth, setSelectedMonth] = useState('Filter by month')
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:3001/plans`)
      .then(r => r.json())
      .then(data => setData(data))
  }, [])

  function onChange(month) {
    setSelectedMonth(month)
  }

  function handleClick() {
    setIsClicked(true)
  }

  function onSubmit(newObj) {
    setData([...data, newObj])
  }

  function onDelete(id) {
    const deleted = [...data].filter(item => item.id !== id)
    setData(deleted)
  }

  function onEdit(obj) {
    const newData = data.map(plan => plan.id === obj.id ? obj : plan)
    setData(newData)
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={
          <div className='App' >
            <h1>My Plans for 2022</h1>
            <hr />
            <br />
            <Filter handleClick={handleClick} onChange={onChange} />
            <br />
            <br />
            <Home data={data} selectedMonth={selectedMonth} isClicked={isClicked} >
              <ToDoItem onDelete={onDelete} />
            </Home>
          </div>
        } />
        <Route exact path='/new' element={<AddNew onSubmit={onSubmit} />} />
        <Route exact path='/:id' element={<InfoPage data={data} />} />
        <Route path={`/:id/edit`} element={<EditPage data={data} onEdit={onEdit} />} />
      </Routes>
    </>
  );
}

export default App;
