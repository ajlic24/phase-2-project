
import React from "react"


function Home({data, selectedMonth, isClicked, children}) {
    
    const sortedMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const toSort = isClicked ? data.sort((a, b) => sortedMonths.indexOf(a.month) - sortedMonths.indexOf(b.month)) : data

    const toShow = toSort.filter(item => selectedMonth === 'Filter by month' ? true : item.month === selectedMonth).map(toDo => {
        return (
            <React.Fragment key={toDo.id}>
                {React.cloneElement(children, {toDo})}
            </React.Fragment>
        )
    })

    return (
            <ul>{toShow}</ul>
    )
}

export default Home
