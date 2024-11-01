import '../App.css'

import {Link} from 'react-router-dom'

const Header = ()=>{
    return (
        <div>
            <h1 className="header">Market Place</h1>
            <nav className='navbar'>
            <Link to = '/'>Home</Link>
            <Link to = '/items'>Item List</Link>
            <Link to = '/additem'>Add Items</Link>
            <Link to ='/cart'>Cart</Link>
            </nav>
        </div>
    )

}

export default Header