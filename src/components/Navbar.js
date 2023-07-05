import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

const Navbar = ({ valueFromNavbar }) => {

    const [inputValue, setinputValue] = useState('')

    const handleChange = async (event) => {
        setinputValue(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        valueFromNavbar(inputValue)
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand wrapper" to="/"><img src={process.env.PUBLIC_URL + '/icon.png'} style={{ width: '25px', height: '25px', marginBottom: '5px', marginRight: '5px' }}></img>Weather Forecast</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item wrapper"><Link className="nav-link" aria-current="page" to="/">Bengaluru</Link></li>
                        <li className="nav-item wrapper"><Link className="nav-link" aria-current="page" to="/ballari">Ballari</Link></li>
                        <li className="nav-item wrapper"><Link className="nav-link" aria-current="page" to="/delhi">Delhi</Link></li>
                        <li className="nav-item wrapper"><Link className="nav-link" aria-current="page" to="/hyderabad">Hyderabad</Link></li>
                        <li className="nav-item wrapper"><Link className="nav-link" aria-current="page" to="/mumbai">Mumbai</Link></li>
                        <li className="nav-item wrapper"><Link className="nav-link" aria-current="page" to="/chennai">Chennai</Link> </li>
                    </ul>
                    <form className="d-flex" onSubmit={handleSubmit}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={inputValue} onChange={handleChange} />
                        <button className="btn btn-dark btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar