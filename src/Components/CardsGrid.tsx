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
        if (counter.current >= Number(process.env.REACT_APP_LIMIT_IMAGES)-1) {
            setLoading(false);
            counter.current = 0
        }
    }

    return (
        <>
            <div className={"d-flex justify-content-center" + (loading ? "":" d-none")}>
                <Spinner animation="border" className=" mt-2" variant="success" />
                </div>

            <div className={`row row-cols-1 row-cols-sm-2 m-4 ` + (loading ? " d-none" : "")}>
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
