import React, { ReactElement } from 'react'

interface Props {
    image_url: string,
    title: string,
    imageLoaded: () => void
}


export default function Card({ image_url,title,imageLoaded }: Props): ReactElement {
    return (
        <div className="col-lg-3 col-md-6 mb-4" >
            <div className="card h-100">
                <img className="card-img-top"
                 src={image_url} 
                 alt="" 
                 onLoad={imageLoaded}
                 />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                </div>
            </div>
        </div>
    )
}
