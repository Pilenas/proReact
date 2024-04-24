
import { Link } from 'react-router-dom';

function Navitem() {

    const user = false;

    return (
        <>
        <Link to="/"> 
            <li>Startsida</li>
        </Link>

        <Link to="/favorites">

            <li>Favoriter </li>

        </Link>

        <Link to="/watchlist">
            
            <li>Watch List</li>
            
        </Link>

            <li>{ user ? 'Logga Ut' : 'Logga In' }</li>
                
            
        </>
    )
}

export default Navitem