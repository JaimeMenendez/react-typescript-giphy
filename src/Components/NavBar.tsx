import React, { Dispatch, ReactElement, SetStateAction} from 'react'

interface INavBarProps {
    setLoading:  Dispatch<SetStateAction<boolean>>
}


export default function NavBar(props: INavBarProps): ReactElement {    
    return (
        <nav className="navbar navbar-dark bg-dark mb-2">
            <div className="container">
                <a className="navbar-brand" href="https://giphy.com/">GIPHY APP</a>
                <button className="btn btn-success" onClick={() => props.setLoading(true)}>Cargar random</button>
            </div>
        </nav>
    )
}
