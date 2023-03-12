import React, { useEffect, useState } from 'react';
import axios from "axios";
import QuizzCard from './QuizzCard';

const Quizzer = () => {

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function verification() {
        let rep = document.getElementById("reponse").value.toLowerCase()
        let reponse = document.getElementById("reponse_").value.toLowerCase()
        if (rep === reponse)
            document.getElementById("texte").textContent = "Bravo"
        else
            document.getElementById("texte").textContent = "Perdu"
    }

    const [data, setData] = useState([])
    const [rangeValue, setRangeValue] = useState(0)
    const radios = ["World", "Africa", "North America", "South America", "Asia", "Europe", "Oceania"]
    const [selectedRadio, setSelectedRadio] = useState("World")
    const [dataquizz, setDataQuizz] = useState([])

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(res => setData(res.data))
    }, [])

    useEffect(() => setDataQuizz(data.filter(country => {
        if (selectedRadio !== "World")
            return country.continents.includes(selectedRadio)
        return country
    })), [data, selectedRadio])

    useEffect(() => {
        setRangeValue(getRandomInt(dataquizz.length))
    }, [dataquizz])

    return (
        <div className="countries">
            <ul className="radio-container">
                {radios.map(continent => (
                    <li>
                        <input type="radio" id={continent} onChange={(e) => { setSelectedRadio(e.target.id) }} name="continentRadio" />
                        <label htmlFor={continent}>{continent}</label>
                    </li>
                ))}
            </ul>
            <ul className="quizz">
                <li>
                    <label htmlFor="reponse">De quel pays est ce drapeau ?</label>
                </li>
                {
                    dataquizz
                        .slice(rangeValue, rangeValue + 1)
                        .map((country) => (
                            <QuizzCard country={country} />
                        ))
                }
                <li>
                    <input type="text" id="reponse" />
                    <button type="submit" id="button_reponse" onClick={verification}>Valider</button>
                </li>
                <li>
                    <p id="texte"></p>
                </li>
            </ul>
        </div>
    );
};

export default Quizzer;