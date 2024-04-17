import './trailer.css';
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
            <video src="https://youtu.be/qtRKdVHc-cE" className="trailers-src"></video>
        </section>
    )
    }

export default Trailer;
