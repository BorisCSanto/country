import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from './Card';

const Countries = () => {

    const [data, setData] = useState([])
    const [rangeValue, setRangeValue] = useState(36)
    const radios = ["Africa", "North America", "South America", "Asia", "Europe", "Oceania"]
    const [selectedRadio, setSelectedRadio] = useState("")
    // useEffect est exécuté quand le composant est monté .
    // !! le composant est monté deux fois en ReactStrictMode (index.js)
    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(res => setData(res.data))
    }, [])

    return (
        <div className="countries">
            <ul className="radio-container">
                <input type="range" min="1" max="250" defaultValue={rangeValue} onChange={(e) => setRangeValue(e.target.value)} />
                {radios.map(continent => (
                    <li>
                        <input type="radio" id={continent} onChange={(e) => { setSelectedRadio(e.target.id) }} name="continentRadio" />
                        <label htmlFor={continent}>{continent}</label>
                    </li>
                ))}
            </ul>
            <ul>
                {
                    data
                        .filter(country => {
                            if (selectedRadio !== "")
                                return country.continents.includes(selectedRadio)
                            return country
                        })
                        .slice(0, rangeValue)
                        .map((country, index) => (
                            <Card key={index} country={country} />
                        ))
                }
            </ul>
        </div>
    );
};

export default Countries;