import React, { ReactElement, useRef, useState } from 'react'
import Card from "./Card"
import IGifData from "../Interfaces/IGifData"
import { Spinner } from "react-bootstrap";

interface ICardsGridProps {
    imagenes: Array<IGifData>
}

export default function CardsGrid({ imagenes }: ICardsGridProps): ReactElement {
    const [loading, setLoading] = useState(true);
    const counter = useRef(0);
    const imageLoaded = () => {
        counter.current += 1;
        console.log(counter.current);
        if (counter.current >= Number(process.env.REACT_APP_LIMIT_IMAGES)) {
            setLoading(false);
            counter.current = 0
        }
    }

    return (
        <>
            <Spinner animation="border" className="mt-2" variant="success"
                style={{ display: loading ? "block" : "none" }} />

            <div className="container card-group justify-content-center"
                style={{ display: loading ? "none" : "flex" }}>
                {(imagenes.map(imagen => {
                    return (
                        <Card
                            key={imagen.id}
                            image_url={imagen.images.downsized.url}
                            title={imagen.title}
                            imageLoaded={imageLoaded}
                        />
                    )
                }))}
            </div>
        </>
    )
}
