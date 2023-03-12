import React from 'react';

const QuizzCard = ({ country }) => {
    return (
        <li className='card'>
            <img src={country.flags.svg} alt="Devine" />
            <div className='infos'>
                <p>{country.capital}</p>
            </div>
            <input type="hidden" id="reponse_" value={country.translations.fra.common} />
        </li>
    );
};

export default QuizzCard;