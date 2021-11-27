import React, { useEffect, useState } from 'react';
import NavBar from "./NavBar";
import CardsGrid from "./CardsGrid";
import IGifData from "../Interfaces/IGifData"
import { Spinner } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [imagenes, setImagenes] = useState<Array<IGifData>>([]);
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)


    useEffect(() => {
        let numberOfImages = Number(process.env.REACT_APP_LIMIT_IMAGES);
        let offset = getRandomInt(0, 5000 / numberOfImages) * numberOfImages

        if (loading) {
            fetch("https://api.giphy.com/v1/gifs/trending?limit=16&api_key=" +
                process.env.REACT_APP_GIPHY_KEY + "&offset=" + offset)
                .then(res => res.json())
                .then(data => { setLoading(false); setImagenes(data.data); setError(false) })
                .catch(err => { console.log(err); setError(true); setLoading(false) })
        }
    }, [loading])

    return (
        <>

            <NavBar setLoading={setLoading} />
            {
                error ? 
                <div className="alert alert-danger m-5 text-center">Error al cargar las imágenes. Es probable que haya excedido el número de peticiones diarias permitidas en la cuenta gratuita de  <a href="https://developers.giphy.com/docs/api#quick-start-guide">GIPHY API</a></div>
                    : loading ?
                        <div className="d-flex justify-content-center">
                            <Spinner animation="border" className=" mt-2" variant="success" />
                        </div>
                        : <CardsGrid imagenes={imagenes} />
            }
        </>
    )
}

function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
}


export default App;
