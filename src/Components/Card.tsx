import React, { ReactElement } from 'react'

interface Props {
    image_url: string,
    title: string,
    imageLoaded: () => void
}


export default function Card({ image_url,title,imageLoaded }: Props): ReactElement {
    return (
        <div className="col-md-3" >
            <div className="card">
                <img className="card-img-top"
                 src={image_url} 
                 alt="" 
                 onLoad={imageLoaded}
                 />
                <div className="card-body">
                    <h4 className="card-text">{title}</h4>
                </div>
            </div>
        </div>
    )
}
