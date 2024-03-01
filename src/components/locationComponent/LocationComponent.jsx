import React, { useEffect, useState } from 'react'
import { IoLocationOutline } from "react-icons/io5";
import cmedia from './location.module.css';
import { authAPI } from '../../api/api';

const LocationComponent = () => {
    const [city, setCity] = useState('');

    const handleClick = () => {
        const options = {
            enableHighAccuracy: true,//высокая точность
            timeout: 5000,
            maximumAge: 0,
        }
        const success = async (pos) => {
            try {
                const { latitude, longitude } = pos.coords;
                const { data } = await authAPI.getLocation(latitude, longitude);
                console.log(data)
                if (data.features[0].properties.city) {
                    setCity(data.features[0].properties.city);
                }
            } catch (error) {
                console.log(error.message)
            }
        }
        const errorFunc = (error) => {
            console.log(error.message)
        }
        navigator.geolocation.getCurrentPosition(success, errorFunc, options)
    }

    return (
        <div className={cmedia.location}>
            <IoLocationOutline size={25} />
            {city
                ? <p>{city}</p>
                : <div className={cmedia.choseCity} onClick={handleClick}>Выбрать город</div>
            }

        </div>
    )
}

export default LocationComponent