import React from 'react'

function Navitem() {

    const user = true;

    return (
        <>
            <li>Startsida</li>
            <li>Favoriter</li>
            <li>Watch List</li>
            <li>{ user ? 'Logga Ut' : 'Logga In' }</li>
                
            
        </>
    )
}

export default Navitem