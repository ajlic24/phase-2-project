import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <>
            <NavLink to='/' >Home</NavLink>
            <br />
            <NavLink to='/new' >Add to List</NavLink>
        </>
    )
}

export default NavBar