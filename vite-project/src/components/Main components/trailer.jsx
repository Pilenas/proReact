import './main.css';
import axios from "axios";
import { useState } from 'react';

const getTrailers = () => {
    axios.get('https://santosnr6.github.io/Data/movies.json')
    .then(response => {
        const trailers = response.data
        setTrailers([])
        
    })
    .catch(error => console.log(error))
}

function Trailer() {
    const [trailers, setTrailers] = useState([])
    getTrailers(setTrailers)
    return (
        <section className="video-trailers">
            <iframe className='trailers-src' src="https://www.youtube.com/embed/qtRKdVHc-cE"></iframe>
        </section>
    )
    }

export default Trailer;
