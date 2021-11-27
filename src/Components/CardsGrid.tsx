import React, { ReactElement, useRef, useState } from 'react'
import Card from "./Card"
import IGifData from "../Interfaces/IGifData"
import { Spinner } from "react-bootstrap";

interface ICardsGridProps {
    images: Array<IGifData>,
    loadingImages: boolean,
    setLoadingImages: React.Dispatch<React.SetStateAction<boolean>>,
}

function CardsGrid({ images,loadingImages,setLoadingImages }: ICardsGridProps): ReactElement {
    
    const counter = useRef(0);
    const imageLoaded = () => {
        counter.current += 1;
        if (counter.current >= Number(process.env.REACT_APP_LIMIT_IMAGES)-1) {
            setLoadingImages(false);
            counter.current = 0
        }
    }
    return (
        <>
            <div className={"d-flex justify-content-center" + (loadingImages ? "":" d-none")}>
                <Spinner animation="border" className=" mt-2" variant="success" />
                </div>

            <div className={`row row-cols-1 row-cols-sm-2 m-4 ` + (loadingImages ? " d-none" : "")}>
                {(images.map(imagen => {
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

export default CardsGrid