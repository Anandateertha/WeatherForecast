import React, { useEffect, useState } from 'react'
import '../styles/Weather.css'
import Navbar from './Navbar'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

const Weather = (props) => {

    const [parameters, setparameters] = useState([])
    const [value, setvalue] = useState('')
    const [loading, setloading] = useState(true)
    const forecast = async () => {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'API KEY',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };
        props.setProgress(10)
        let url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${value ? value : props.city}`;
        // this.setState({ loading: true })
        setloading(true)
        const data = await fetch(url, options)
        props.setProgress(30)
        let parsedData = await data.json()
        props.setProgress(50)
        console.log(parsedData)

        setparameters(parsedData)
        setloading(false)

        props.setProgress(70)
        props.setProgress(100)



    }

    useEffect(() => {
        document.title = `Weather Forecast - ${value ? value.charAt(0).toUpperCase() + value.slice(1) : props.city.charAt(0).toUpperCase() + props.city.slice(1)}`
        forecast()
    }, [])


    const valueFromNavbar = (value) => {
        setvalue(value)
        forecast()
    }



    return (
        <>
            <Navbar valueFromNavbar={valueFromNavbar} />
            <div>
                <video autoPlay muted loop id="myVideo">
                    <source src={process.env.PUBLIC_URL + '/hot.mp4'} type='video/mp4' />
                </video>
                <section className="vh-100 " style={{ backgroundColor: '#282828', marginTop: '25px' }}>
                    <div className="container py-5 h-100">

                        <div className="row d-flex justify-content-center align-items-center h-100" style={{ color: '#282828' }}>
                            <div className="col-md-9 col-lg-7 col-xl-5">

                                <div className="card mb-4 gradient-custom" style={{ borderRadius: '25px' }}>
                                    <div className="card-body p-4">

                                        <div id="demo1" className="carousel slide" data-ride="carousel">
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <div className="d-flex justify-content-between mb-4 pb-2">
                                                        <div>
                                                            <h2 className="display-2 wrapperWeather"><strong style={{ width: "320px", display: "inline-block" }}>{loading ? <Spinner /> : parameters.temp}°C</strong></h2>
                                                            <p className="text-muted mb-0 wrapperWeather">{value ? value.charAt(0).toUpperCase() + value.slice(1) : props.city.charAt(0).toUpperCase() + props.city.slice(1)}</p>
                                                        </div>
                                                        <div>
                                                            <img src={parameters.temp >= 30 ? "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu3.webp" : process.env.PUBLIC_URL + '/cold.webp'}
                                                                width="150px" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="card mb-4" style={{ borderRadius: '25px' }}>
                                    <div className="card-body p-4">

                                        <div id="demo2" className="carousel slide" data-ride="carousel">
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                                                        <div className="flex-column">
                                                            <p className="small wrapperWeather2"><strong>Min Temp</strong></p>
                                                            <i className="fas fa-sun fa-2x mb-3" style={{ color: '#ddd' }}></i>
                                                            <p className="mb-0 wrapperWeather2"><strong>{parameters.min_temp}°C</strong></p>
                                                        </div>
                                                        <div className="flex-column">
                                                            <p className="small wrapperWeather2"><strong>Max Temp</strong></p>
                                                            <i className="fas fa-sun fa-2x mb-3" style={{ color: '#ddd' }}></i>
                                                            <p className="mb-0 wrapperWeather2"><strong>{parameters.max_temp}°C</strong></p>
                                                        </div>
                                                        <div className="flex-column">
                                                            <p className="small wrapperWeather2"><strong>Feels Like</strong></p>
                                                            <i className="fas fa-cloud fa-2x mb-3" style={{ color: '#ddd' }}></i>
                                                            <p className="mb-0 wrapperWeather2"><strong>{parameters.feels_like}°C</strong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="card" style={{ borderRadius: '25px' }}>
                                    <div className="card-body p-4">

                                        <div id="demo3" className="carousel slide" data-ride="carousel">
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                                                        <div className="flex-column">
                                                            <p className="small wrapperWeather2"><strong>Wind Speed</strong></p>
                                                            <i className="fas fa-cloud fa-2x mb-3" style={{ color: '#ddd' }}></i>
                                                            <p className="mb-0 wrapperWeather2"><strong>{parameters.wind_speed}  m/s</strong></p>
                                                        </div>
                                                        <div className="flex-column">
                                                            <p className="small wrapperWeather2"><strong>Wind Degree</strong></p>
                                                            <i className="fas fa-cloud-showers-heavy fa-2x mb-3"
                                                                style={{ color: '#ddd' }}></i>
                                                            <p className="mb-0 wrapperWeather2"><strong>{parameters.wind_degrees}°</strong></p>
                                                        </div>
                                                        <div className="flex-column">
                                                            <p className="small wrapperWeather2"><strong>Humidity</strong></p>
                                                            <i className="fas fa-sun fa-2x mb-3" style={{ color: '#ddd' }}></i>
                                                            <p className="mb-0 wrapperWeather2"><strong>{parameters.humidity}%</strong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </>
    )

}

Weather.defaultProps = {
    city: 'bengaluru'
}

Weather.propTypes = {
    city: PropTypes.string
}

export default Weather
