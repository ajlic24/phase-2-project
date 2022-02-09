import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import { useEffect, useState } from 'react'
import React from 'react'
import Filter from './Filter'
import NavBar from './NavBar'
import AddNew from './AddNew'
import '../App.css'

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

  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={
          <div className='App' >
            <h1>My Plans for 2022</h1>
            <hr />
            <br />
            <Filter onChange={onChange} handleClick={handleClick} />
            <br />
            <br />
            <Home data={data} selectedMonth={selectedMonth} isClicked={isClicked} />
          </div>
        } />
        <Route exact path='/new' element={<AddNew />} />
      </Routes>
    </>
  );
}

export default App;
