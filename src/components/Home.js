
import React from "react"
import ToDoItem from "./ToDoItem"


function Home({data, selectedMonth, isClicked}) {
    
    const sortedMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const toSort = isClicked ? data.sort((a, b) => sortedMonths.indexOf(a.month) - sortedMonths.indexOf(b.month)) : data

    const toShow = toSort.filter(item => selectedMonth === 'Filter by month' ? true : item.month === selectedMonth).map(toDo => {
        return (
            <ToDoItem key={toDo.id} toDo={toDo} />
                
        )
    })

    return (
            <ul>{toShow}</ul>
    )
}

export default Home
