import {Route, Routes} from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './Home'
import React from 'react'
import Filter from './Filter'
import NavBar from './NavBar'
import AddNew from './AddNew'
import InfoPage from './InfoPage'
import EditPage from './EditPage'
import '../App.css'


function App() {
  const [data, setData] = useState([])
  const [selectedMonth, setSelectedMonth] = useState('Filter by month')
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}`)
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
            <h1>miniPlanner</h1>
            <hr />
            <br />
            <Filter handleClick={handleClick} onChange={onChange} />
            <br />
            <br />
            <Home data={data} selectedMonth={selectedMonth} isClicked={isClicked} />
          </div>
        } />
        <Route exact path='/new' element={<AddNew onSubmit={onSubmit} />} />
        <Route exact path='/:id' element={<InfoPage data={data} onDelete={onDelete} />} />
        <Route path={`/:id/edit`} element={<EditPage data={data} onEdit={onEdit} />} />
      </Routes>
    </>
  );
}

export default App;
