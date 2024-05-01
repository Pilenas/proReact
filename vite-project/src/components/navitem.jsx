import { Link } from 'react-router-dom';
import './navitem.css'; 

function Navitem() {

    const user = false;

    return (
        <>
        <Link to="/" className="nav-item-link"> 
            <li>Startsida</li>
        </Link>

        <Link to="/favorites" className="nav-item-link">

            <li>Favoriter </li>

        </Link>

        <Link to="/watchlist" className="nav-item-link">
            
            <li>Watch List</li>
            
        </Link>

        <li>{ user ? 'Logga Ut' : 'Logga In' }</li>
                
            
        </>
    )
}

export default Navitem