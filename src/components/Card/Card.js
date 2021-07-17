import React from 'react';
import NameCard from '../NameCard/NameCard';
import './Card.css';


const Card =({suggestedNames}) => {

    const suggestNamesJSX = suggestedNames.map((suggestedName)=>{
        return <NameCard key={suggestedName}suggestedName={suggestedName}/>
    });
    return(
        <div className="card-container">
            {suggestNamesJSX}
        </div>
    )

}

export default Card;