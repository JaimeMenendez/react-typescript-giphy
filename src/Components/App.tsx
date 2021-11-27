import React, { useEffect, useState } from 'react';
import NavBar from "./NavBar";
import CardsGrid from "./CardsGrid";
import IGifData from "../Interfaces/IGifData"
import { Spinner } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [imagenes, setImagenes] = useState<Array<IGifData>>([]);
    const [loading, setLoadingx] = useState(true)
    const [loadingImages, setLoadingImages] = useState(true);
    const [error, setError] = useState(false);


    useEffect(function () {
        let numberOfImages = Number(process.env.REACT_APP_LIMIT_IMAGES);
        let offset = getRandomInt(0, 1000 / numberOfImages) * numberOfImages;
        let URL = "https://api.giphy.com/v1/gifs/trending?limit=16&api_key=" +process.env.REACT_APP_GIPHY_KEY+ "&offset=" + offset ;

        if (loading) {
            fetch(URL)
                .then(res => res.json())
                .then(data => { setImagenes(data.data); setError(false); setLoadingx(false) })
                .catch(err => { console.log(err); setError(true)});
        }
    }, [loading])

    return (
        <>
            <NavBar setLoading={() => { setLoadingx(true);setLoadingImages(true)}} />

            <div className={"d-flex justify-content-center" + (loading ? "" : " d-none")}>
                <Spinner animation="border" className=" mt-2" variant="success" />
            </div>

        {error ?
            <div className="alert alert-danger m-5">Ha ocurrido un error. Probablemente haya excedido el número máximo de peticiones diarias que ofrece la versión gratuita de <a href="https://developers.giphy.com/docs/api#quick-start-guide">GIPHY API</a>. Solo se permite un máximo de 1000 peticiones al día.</div>
            : null
        }

            <div className={(loading ? " d-none" : "")}>
                <CardsGrid loadingImages={loadingImages} setLoadingImages={setLoadingImages} images={imagenes} />
            </div>
        </>
    )
}

function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
}


export default App;
