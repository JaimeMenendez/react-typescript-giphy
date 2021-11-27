import React, { useEffect, useState } from 'react';
import '../assets/css/app.css';
import NavBar from "./NavBar";
import CardsGrid from "./CardsGrid";
import IGifData from "../Interfaces/IGifData"
import { Spinner } from "react-bootstrap";

function App() {
    const [imagenes, setImagenes] = useState<Array<IGifData>>([]);
    const [loading, setLoading] = useState<boolean>(true)
   

    useEffect(() => {
        let numberOfImages = Number(process.env.REACT_APP_LIMIT_IMAGES);
        let offset = getRandomInt(0, 5000/numberOfImages) * numberOfImages

        if (loading) {
            fetch("https://api.giphy.com/v1/gifs/trending?limit=16&api_key=" +
                process.env.REACT_APP_GIPHY_KEY + "&offset=" + offset)
                .then(res => res.json())
                .then(data => { setLoading(false); setImagenes(data.data) })
                .catch(err => { console.log(err); setLoading(false) })
        }
    }, [loading])

    return (
        <div className="container card-group d-flex justify-content-center">
            <NavBar setLoading={setLoading} />
            {loading ? <Spinner animation="border" className="mt-2" variant="success" />
                : <CardsGrid imagenes={imagenes} />}
        </div>
    )
}

function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
}


export default App;
